import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { useTranslation } from "react-i18next";

export default function SalesQuotes() {
  const { t } = useTranslation();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/sales-quotes")
      .then(res => res.json())
      .then(data => setQuotes(data))
      .catch(err => console.error(err));
  }, []);

  const columns = [
  { accessor: "#", label: "#" },
  { accessor: "number", label: "Quote No" },
  { accessor: "status", label: "Status" },
  { accessor: "customerName", label: "Customer Name" },
  { accessor: "date", label: "Date" },
  { accessor: "total", label: "Total" },
];


    const formattedData = quotes.map(q => ({
    ...q,
    customerName: q.customer?.name || "",
    date: new Date(q.date).toLocaleDateString(),
  }));



  return <DataTable title={t("Sales Quotes")} columns={columns} data={formattedData} />;
}
