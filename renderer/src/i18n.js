import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Menu
      Dashboard: "Dashboard",
      "Sales Quotes": "Sales Quotes",
      "Sales Invoices": "Sales Invoices",
      "Sales Payments": "Sales Payments",
      "Purchase Invoices": "Purchase Invoices",
      "Purchase Payments": "Purchase Payments",
      Ledger: "Ledger",
      "Bank Balance": "Bank Balance",

      // Customers & Suppliers
      Customer: "Customer",
      Customers: "Customers",
      Supplier: "Supplier",
      Suppliers: "Suppliers",

      // Invoices & Quotes
      Quote: "Quote",
      Quotes: "Quotes",
      Invoice: "Invoice",
      Invoices: "Invoices",
      Number: "Number",
      Date: "Date",
      Total: "Total",
      Status: "Status",
      Draft: "Draft",
      Sent: "Sent",
      Paid: "Paid",
      Partial: "Partial",

      // Payments
      Payment: "Payment",
      Method: "Method",
      Amount: "Amount",

      // Ledger
      LedgerEntry: "Ledger Entry",
      Type: "Type",
      RefType: "Reference Type",
      RefId: "Reference ID",
      Description: "Description",
      Inflow: "Inflow",
      Outflow: "Outflow",
      Balance: "Balance",

      // Bank
      Bank: "Bank",

      // Items
      Item: "Item",
      Items: "Items",
      Price: "Price",
      Quantity: "Quantity",
      "Unit Price": "Unit Price",
      "Line Total": "Line Total",

      // Table columns
      "#": "#",
      "Invoice No": "Invoice No",
      "Quote No": "Quote No",
      "Customer Name": "Customer",
      "Supplier Name": "Supplier",
      "Base Grand Total": "Base Grand Total",
      "Outstanding Amount": "Outstanding Amount",
      "Entry No": "Entry No",
      Debit: "Debit",
      Credit: "Credit",
      empty: "No data available",
      Settings: "Settings",
      Language: "Language",
      SwitchToArabic: "Switch to Arabic",
      SwitchToEnglish: "Switch to English",
      "Sales Payments": "Sales Payments",
      "Payment No": "Payment No",
      "Party": "Party",
      "Posting Date": "Posting Date",



    }
  },
  ar: {
    translation: {
      // Menu
      Dashboard: "لوحة التحكم",
      "Sales Quotes": "عروض الأسعار",
      "Sales Invoices": "فواتير المبيعات",
      "Sales Payments": "مدفوعات المبيعات",
      "Purchase Invoices": "فواتير المشتريات",
      "Purchase Payments": "مدفوعات المشتريات",
      Ledger: "السجل المالي",
      "Bank Balance": "رصيد البنك",

      // Customers & Suppliers
      Customer: "عميل",
      Customers: "العملاء",
      Supplier: "مورد",
      Suppliers: "الموردين",

      // Invoices & Quotes
      Quote: "عرض",
      Quotes: "عروض",
      Invoice: "فاتورة",
      Invoices: "الفواتير",
      Number: "الرقم",
      Date: "التاريخ",
      Total: "الإجمالي",
      Status: "الحالة",
      Draft: "مسودة",
      Sent: "مرسلة",
      Paid: "مدفوعة",
      Partial: "جزئي",

      // Payments
      Payment: "الدفع",
      Method: "طريقة الدفع",
      Amount: "المبلغ",

      // Ledger
      LedgerEntry: "قيد مالي",
      Type: "النوع",
      RefType: "نوع المرجع",
      RefId: "رقم المرجع",
      Description: "الوصف",
      Inflow: "وارد",
      Outflow: "صادر",
      Balance: "الرصيد",

      // Bank
      Bank: "البنك",

      // Items
      Item: "صنف",
      Items: "الأصناف",
      Price: "السعر",
      Quantity: "الكمية",
      "Unit Price": "سعر الوحدة",
      "Line Total": "إجمالي السطر",

      // Table columns
      "#": "#",
      "Invoice No": "رقم الفاتورة",
      "Quote No": "رقم العرض",
      "Customer Name": "العميل",
      "Supplier Name": "المورد",
      "Base Grand Total": "المبلغ الإجمالي",
      "Outstanding Amount": "المبلغ المستحق",
      "Entry No": "رقم السجل",
      Debit: "مدين",
      Credit: "دائن",
      empty: "لا توجد بيانات حتى الآن",
      Settings: "الإعدادات",
      Language: "اللغة",
      SwitchToArabic: "التبديل إلى العربية",
      SwitchToEnglish: "التبديل إلى الإنجليزية",
      "Sales Payments": "مدفوعات المبيعات",
      "Payment No": "رقم الدفع",
      "Party": "الطرف",
      "Posting Date": "تاريخ التسجيل",



    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // default Arabic
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
