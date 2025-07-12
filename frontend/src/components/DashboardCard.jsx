import React from "react";
import { Link } from "react-router-dom";

function DashboardCard({ title, subtitle, children, link }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col justify-between h-full">
      <div className="mb-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-lg text-black">{subtitle}</p>}
      </div>
      <div className="flex-1">{children}</div>
      {link && (
        <Link
          to={link}
          className="mt-2 text-sky-600 hover:underline text-sm self-end"
        >
          More Details
        </Link>
      )}
    </div>
  );
}

export default DashboardCard;
