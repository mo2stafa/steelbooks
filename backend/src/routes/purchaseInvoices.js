import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/purchase-invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await prisma.purchaseInvoice.findMany({
      include: {
        supplier: true,
        payments: true,
      },
      orderBy: { date: "desc" },
    });

    const formatted = invoices.map((inv, index) => {
      const paidAmount = inv.payments.reduce((sum, p) => sum + p.amount, 0);
      return {
        "#": index + 1,
        "Invoice No": inv.number,
        Status: inv.status,
        Supplier: inv.supplier?.name || "—",
        Date: inv.date.toISOString().split("T")[0],
        "Base Grand Total": inv.total,
        "Outstanding Amount": inv.total - paidAmount,
      };
    });

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
