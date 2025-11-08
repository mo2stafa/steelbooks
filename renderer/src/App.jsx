import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SalesQuotes from "./pages/SalesQuotes";
import SalesInvoices from "./pages/SalesInvoices";
import SalesPayments from "./pages/SalesPayments";
import PurchaseInvoices from "./pages/PurchaseInvoices";
import PurchasePayments from "./pages/PurchasePayments";
import Ledger from "./pages/Ledger";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales-quotes" element={<SalesQuotes />} />
          <Route path="sales-invoices" element={<SalesInvoices />} />
          <Route path="sales-payments" element={<SalesPayments />} />
          <Route path="purchase-invoices" element={<PurchaseInvoices />} />
          <Route path="purchase-payments" element={<PurchasePayments />} />
          <Route path="ledger" element={<Ledger />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}
