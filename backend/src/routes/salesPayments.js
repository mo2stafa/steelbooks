import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/sales-payments
router.get("/", async (req, res) => {
  try {
    const payments = await prisma.salesPayment.findMany({
      include: { invoice: { include: { customer: true } } },
      orderBy: { date: "desc" },
    });

    // Format for frontend DataTable
    const formatted = payments.map((p, index) => ({
      "#": index + 1,
      "Payment No": `PAY-${p.id.toString().padStart(3, "0")}`,
      Status: p.invoice?.status || "—",
      Party: p.invoice?.customer?.name || "—",
      "Posting Date": p.date.toISOString().split("T")[0],
      Amount: p.amount,
    }));

    res.json(formatted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
