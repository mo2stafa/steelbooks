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
    { accessor: "#" },
    { accessor: "Quote No" },
    { accessor: "Status" },
    { accessor: "Customer Name" },
    { accessor: "Date" },
    { accessor: "Base Grand Total" },
    { accessor: "Outstanding Amount" },
  ];

  return <DataTable title={t("Sales Quotes")} columns={columns} data={quotes} />;
}
