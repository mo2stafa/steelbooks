import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/purchase-payments
router.get("/", async (req, res) => {
  try {
    const payments = await prisma.purchasePayment.findMany({
      include: { invoice: { include: { supplier: true } } },
      orderBy: { date: "desc" },
    });

    const formatted = payments.map((p, index) => ({
      "#": index + 1,
      "Payment No": `PPAY-${p.id.toString().padStart(3, "0")}`,
      Status: p.invoice?.status || "—",
      Party: p.invoice?.supplier?.name || "—",
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
