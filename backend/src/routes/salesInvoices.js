import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * GET /api/sales-invoices
 * Fetch all sales invoices with customer data
 */
router.get("/", async (req, res) => {
  try {
    const invoices = await prisma.salesInvoice.findMany({
    include: {
        customer: true,
        payments: true,
    },
    orderBy: { date: "desc" },
    });

    const formatted = invoices.map((inv) => {
    const paidAmount = inv.payments.reduce((sum, p) => sum + p.amount, 0);
    return {
        id: inv.id,
        number: inv.number,
        status: inv.status,
        customerName: inv.customer?.name || "—",
        date: inv.date.toISOString().split("T")[0],
        total: inv.total,
        outstandingAmount: inv.total - paidAmount,
    };
    });

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

/**
 * GET /api/sales-invoices/:id
 * Fetch a single invoice by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await prisma.salesInvoice.findUnique({
      where: { id: parseInt(id) },
      include: { customer: true, lines: true, payments: true },
    });

    if (!invoice) return res.status(404).json({ message: "Not found" });

    res.json(invoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});


/**
 * POST /api/sales-invoices
 * Create a new sales invoice with line items
 */
router.post("/", async (req, res) => {
  try {
    const { number, customerId, date, lines, total, status } = req.body;

    // Basic validation
    if (!number || !customerId || !lines || !Array.isArray(lines)) {
      return res.status(400).json({ message: "Missing or invalid fields" });
    }

    // Calculate totals if not provided
    const calculatedTotal =
      total ??
      lines.reduce(
        (sum, line) => sum + line.qty * line.unitPrice,
        0
      );

    // Create the invoice
    const invoice = await prisma.salesInvoice.create({
      data: {
        number,
        customerId,
        date: date ? new Date(date) : new Date(),
        total: calculatedTotal,
        status: status || "DRAFT",
        lines: {
          create: lines.map((line) => ({
            description: line.description,
            qty: line.qty,
            unitPrice: line.unitPrice,
            lineTotal: line.qty * line.unitPrice,
          })),
        },
      },
      include: { lines: true, customer: true },
    });

    res.status(201).json(invoice);
  } catch (error) {
    console.error("❌ Error creating invoice:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


export default router;
