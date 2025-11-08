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
    { accessor: "#" },
    { accessor: "Invoice No" },
    { accessor: "Status" },
    { accessor: "Customer Name" },
    { accessor: "Date" },
    { accessor: "Base Grand Total" },
    { accessor: "Outstanding Amount" },
  ];

  return <DataTable title={t("Sales Invoices")} columns={columns} data={invoices} />;
}
