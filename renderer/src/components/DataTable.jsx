import React from "react";
import { useTranslation } from "react-i18next";

export default function DataTable({ title, columns, data, emptyMessage }) {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            {columns.map((col, index) => (
              <th key={index} style={{ border: "1px solid #ddd", padding: "8px" }}>
                {t(col.accessor)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex}>
                {columns.map((col, i) => (
                  <td key={i} style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {col.accessor === "#" ? rowIndex + 1 : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center", padding: "20px" }}>
                {emptyMessage || t("empty")}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
