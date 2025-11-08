import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { useTranslation } from "react-i18next";

export default function SalesInvoices() {
  const { t } = useTranslation();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/sales-invoices")
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, []);

  const columns = [
    { accessor: "#", label: "#" },
    { accessor: "number", label: "Invoice No" },
    { accessor: "status", label: "Status" },
    { accessor: "customerName", label: "Customer Name" },
    { accessor: "date", label: "Date" },
    { accessor: "total", label: "Base Grand Total" },
    { accessor: "outstandingAmount", label: "Outstanding Amount" },
  ];

  const formattedData = invoices.map((inv) => ({
    ...inv,
    customerName: inv.customerName,
    date: new Date(inv.date).toLocaleDateString(),
  }));

  return (
    <DataTable
      title={t("Sales Invoices")}
      columns={columns}
      data={formattedData}
      emptyMessage={t("No invoices found")}
    />
  );
}
