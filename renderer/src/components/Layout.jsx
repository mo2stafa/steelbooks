import React from "react";
import Sidebar from "./Sidebar";
import { useLocation, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/sales-quotes": "Sales Quotes",
  "/sales-invoices": "Sales Invoices",
  "/sales-payments": "Sales Payments",
  "/purchase-invoices": "Purchase Invoices",
  "/purchase-payments": "Purchase Payments",
  "/ledger": "Ledger",
};

export default function Layout() {
  const location = useLocation();
  const { t } = useTranslation();
  const pageTitle = t(pageTitles[location.pathname] || "SteelBooks");

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <header
          style={{
            width: "100%",
            background: "#202123",
            color: "#ececf1",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            fontSize: "16px",
            fontWeight: "500",
            borderBottom: "1px solid #2f3034",
            flexShrink: 0,
          }}
        >
          {pageTitle}
        </header>
        <main style={{ flex: 1, padding: "20px", overflowY: "auto", backgroundColor: "#fff" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
