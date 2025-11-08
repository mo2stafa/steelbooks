import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("SteelBooks backend running ✅"));

// --- Bank initialization ---
app.post("/api/init-bank", async (req, res) => {
  const exists = await prisma.bankAccount.findFirst();
  if (!exists) {
    const bank = await prisma.bankAccount.create({ data: { name: "Main Bank" } });
    res.json(bank);
  } else {
    res.json(exists);
  }
});

app.listen(3001, () => console.log("✅ Backend running on http://localhost:3001"));
