import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const toggleLang = () => i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");

  return (
    <div style={{ padding: 40 }}>
      <button onClick={toggleLang}>
        {i18n.language === "ar" ? "English" : "العربية"}
      </button>
      <h1>{t("Dashboard")}</h1>
      <h2>{t("Bank Balance")}: 0.00</h2>
    </div>
  );
}

export default App;
