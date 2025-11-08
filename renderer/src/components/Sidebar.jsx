import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  LayoutDashboard,
  FileText,
  DollarSign,
  ShoppingCart,
  CreditCard,
  BookOpen,
  Menu,
  X,
  Settings
} from "lucide-react";

export default function Sidebar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

const menuItems = [
  { label: t("Dashboard"), icon: <LayoutDashboard size={18} />, path: "/dashboard" },
  { label: t("Sales Quotes"), icon: <FileText size={18} />, path: "/sales-quotes" },
  { label: t("Sales Invoices"), icon: <FileText size={18} />, path: "/sales-invoices" },
  { label: t("Sales Payments"), icon: <DollarSign size={18} />, path: "/sales-payments" },
  { label: t("Purchase Invoices"), icon: <ShoppingCart size={18} />, path: "/purchase-invoices" },
  { label: t("Purchase Payments"), icon: <CreditCard size={18} />, path: "/purchase-payments" },
  { label: t("Ledger"), icon: <BookOpen size={18} />, path: "/ledger" },
];

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setSettingsOpen(false); // close menu after selection
  };

  return (
    <div
      style={{
        width: collapsed ? "70px" : "260px",
        background: "#202123",
        color: "#ececf1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width 0.3s ease",
        overflow: "hidden",
        height: "100vh",
        position: "sticky",
        top: 0,
        borderRight: "1px solid #3e3f4b",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "15px 10px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid #3e3f4b",
        }}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "none",
            border: "none",
            color: "#ececf1",
            cursor: "pointer",
            marginRight: 8,
          }}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
        {!collapsed && <h2 style={{ margin: 0, fontSize: 18, color: "#10a37f" }}>SteelBooks</h2>}
      </div>

      {/* Menu items */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "10px 0",
        }}
      >
        {menuItems.map((item, index) => {
          const active = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                textDecoration: "none",
                color: active ? "#10a37f" : "#ececf1",
                background: active ? "#343541" : "transparent",
                borderLeft: active ? "4px solid #10a37f" : "4px solid transparent",
                borderRadius: "0 8px 8px 0",
                transition: "all 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "#343541";
                  e.currentTarget.style.color = "#10a37f";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#ececf1";
                }
              }}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </div>

      {/* Footer with settings */}
      <div
        style={{
          borderTop: "1px solid #3e3f4b",
          padding: "10px 15px",
          fontSize: 12,
          color: "#9ca0a9",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {!collapsed && <p style={{ margin: 0 }}>© 2025 SteelBooks</p>}
          <Link
            to="/settings"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ececf1",
              display: "flex",
              alignItems: "center",
            }}
          >
    <Settings size={16} />
  </Link>
</div>



      </div>
    </div>
  );
}
