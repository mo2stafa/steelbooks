import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { useTranslation } from "react-i18next";

export default function Ledger() {
  const { t } = useTranslation();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/ledger")
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error(err));
  }, []);

  const columns = [
    { accessor: "#" },
    { accessor: "Entry No" },
    { accessor: "Status" },
    { accessor: "Customer Name" },
    { accessor: "Date" },
    { accessor: "Debit" },
    { accessor: "Credit" },
  ];

  return <DataTable title={t("Ledger")} columns={columns} data={entries} />;
}
