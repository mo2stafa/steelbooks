import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: { translation: { "Dashboard": "Dashboard", "Bank Balance": "Bank Balance" } },
  ar: { translation: { "Dashboard": "لوحة التحكم", "Bank Balance": "رصيد البنك" } }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // default Arabic
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
