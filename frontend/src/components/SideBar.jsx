import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/customer-dashboard" },
    { name: "My Profile", path: "/my-profile" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Booking History", path: "/booking-history" },
    { name: "Cars", path: "/cars" },
    { name: "Schedule", path: "/schedule" },
    { name: "Account Settings", path: "/account-settings" },
    { name: "Logout", path: "/logout" }, // optional
  ];

  return (
    <div className="bg-gray-100 w-48 p-4 min-h-screen space-y-2">
      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`block p-2 rounded cursor-pointer hover:bg-blue-200 ${
            location.pathname === item.path ? "bg-blue-100 font-semibold" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
