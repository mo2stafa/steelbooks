import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }}>
      <h1>{t("Dashboard")}</h1>
      <button onClick={toggleLang}>
        {i18n.language === "ar" ? "English" : "العربية"}
      </button>
    </header>
  );
}
