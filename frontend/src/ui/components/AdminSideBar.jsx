import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function AdminSideBar({ mobileOpen = false, onClose = () => {} }) {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const navItems = [
    { to: "/#", icon: <DashboardIcon />, text: "DASHBOARD" },
    { to: "/manage-booking", icon: <BookIcon />, text: "MANAGE BOOKINGS" },
    { to: "/manage-car", icon: <DirectionsCarIcon />, text: "MANAGE CARS" },
    { to: "/manage-user", icon: <PeopleIcon />, text: "MANAGE USERS" },
    { to: "/schedule", icon: <CalendarTodayIcon />, text: "SCHEDULE" },
    { to: "/transaction-logs", icon: <ReceiptIcon />, text: "TRANSACTION LOGS" },
    { to: "/report-analytics", icon: <BarChartIcon />, text: "REPORT & ANALYTICS" },
    { to: "/settings", icon: <SettingsIcon />, text: "SETTINGS" },
    { to: "/login", icon: <LogoutIcon />, text: "LOGOUT" }
  ];

  const SidebarContent = (
    <div className="flex flex-col h-screen bg-blue-800 text-white w-64 shadow-lg">
      <div className="p-4 border-b border-blue-700">
        <h2 className="text-xl font-bold text-white">JA Car Rental System</h2>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        {navItems.map((item, index) => (
          <React.Fragment key={item.to}>
            <NavLink
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'bg-blue-900 text-white' 
                  : 'text-blue-100 hover:bg-blue-700 hover:text-white'}`
              }
            >
              <span className="mr-3">
                {React.cloneElement(item.icon, { 
                  className: 'w-5 h-5',
                  style: { verticalAlign: 'middle' }
                })}
              </span>
              {item.text}
            </NavLink>
            {index < navItems.length - 1 && <hr className="border-blue-700" />}
          </React.Fragment>
        ))}
      </nav>
      <div className="p-4 border-t border-blue-700">
        <div className="text-sm text-blue-200">
          Admin Panel
        </div>
      </div>
    </div>

  );


  
  if (isMobile) {


    return (
      <Drawer
        aria-labelledby="admin-sidebar-title"
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        anchor="left"
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: '65vw', sm: 280 },
            maxWidth: 300,
            top: '70px',
            height: 'calc(100% - 70px)',
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }

  // Desktop: show the fixed sidebar as before
  return SidebarContent;
}