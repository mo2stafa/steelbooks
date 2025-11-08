import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


export default function Dashboard() {
  const { t } = useTranslation();
  const [bankBalance, setBankBalance] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/init-bank")
      .then(res => res.json())
      .then(data => setBankBalance(data.balance));
  }, []);

  return (
    <div>
      <h2>{t("Bank Balance")}: {bankBalance.toFixed(2)}</h2>
      <p>Welcome to SteelBooks Dashboard</p>
    </div>
  );
}
