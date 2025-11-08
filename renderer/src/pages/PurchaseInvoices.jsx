import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { useTranslation } from "react-i18next";

export default function PurchaseInvoices() {
  const { t } = useTranslation();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/purchase-invoices")
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, []);

  const columns = [
    { accessor: "#", label: "#" },
    { accessor: "Invoice No", label: "Invoice No" },
    { accessor: "Status", label: "Status" },
    { accessor: "Supplier", label: "Supplier" },
    { accessor: "Date", label: "Date" },
    { accessor: "Base Grand Total", label: "Base Grand Total" },
    { accessor: "Outstanding Amount", label: "Outstanding Amount" },
  ];

  

  return <DataTable title={t("Purchase Invoices")} columns={columns} data={invoices} />;
}
