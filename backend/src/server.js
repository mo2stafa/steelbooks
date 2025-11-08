import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import salesQuotesRoutes from "./routes/salesQuotes.js";
import salesInvoicesRoutes from "./routes/salesInvoices.js";
import salesPaymentsRoutes from "./routes/salesPayments.js";
import purchaseInvoicesRoutes from "./routes/purchaseInvoices.js";
import purchasePaymentsRoutes from "./routes/purchasePayments.js";





const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/sales-quotes", salesQuotesRoutes);
app.use("/api/sales-invoices", salesInvoicesRoutes);
app.use("/api/sales-payments", salesPaymentsRoutes);
app.use("/api/purchase-invoices", purchaseInvoicesRoutes);
app.use("/api/purchase-payments", purchasePaymentsRoutes);



// Example root
app.get("/", (req, res) => {
  res.send("SteelBooks API is running...");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
