import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
      <div style={{ padding: "20px" }}>
        <h2>{t("Settings")}</h2>

        <div style={{ marginTop: "20px" }}>
          <h3>{t("Language")}</h3>
          <button
            onClick={toggleLanguage}
            style={{
              padding: "8px 16px",
              background: "#10a37f",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              marginTop: 8,
            }}
          >
            {i18n.language === "en" ? t("SwitchToArabic") : t("SwitchToEnglish")}
          </button>
        </div>

        {/* Future settings sections can be added here */}
      </div>
  );
}
