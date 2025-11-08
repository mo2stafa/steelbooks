import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// ✅ Get all sales quotes
router.get("/", async (req, res) => {
  try {
    const quotes = await prisma.salesQuote.findMany({
      include: {
        customer: true,
        lines: true,
      },
      orderBy: { date: "desc" },
    });
    res.json(quotes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch sales quotes" });
  }
});

// ✅ Create new sales quote
router.post("/", async (req, res) => {
  try {
    const { number, customerId, date, total, status, lines } = req.body;

    const quote = await prisma.salesQuote.create({
      data: {
        number,
        customerId,
        date: new Date(date),
        total,
        status,
        lines: {
          create: lines.map((line) => ({
            description: line.description,
            qty: line.qty,
            unitPrice: line.unitPrice,
            lineTotal: line.qty * line.unitPrice,
          })),
        },
      },
      include: {
        customer: true,
        lines: true,
      },
    });

    res.json(quote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create sales quote" });
  }
});

export default router;
