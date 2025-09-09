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
import { Link } from "react-router-dom";

export default function AdminSideBar({ mobileOpen = false, onClose = () => { } }) {
    const isMobile = useMediaQuery("(max-width: 1024px)");

    const navItems = [
        { to: "/admin", icon: <DashboardIcon />, text: "DASHBOARD" },
        { to: "/manage-booking", icon: <BookIcon />, text: "MANAGE BOOKINGS" },
        { to: "/manage-car", icon: <DirectionsCarIcon />, text: "MANAGE CARS" },
        { to: "/manage-user", icon: <PeopleIcon />, text: "MANAGE USERS" },
        { to: "/schedule", icon: <CalendarTodayIcon />, text: "SCHEDULE" },
        { to: "/transaction-logs", icon: <ReceiptIcon />, text: "TRANSACTION LOGS" },
        { to: "/report-analytics", icon: <BarChartIcon />, text: "REPORT & ANALYTICS" },
        { to: "/settings", icon: <SettingsIcon />, text: "SETTINGS" },
        { to: "/login", icon: <LogoutIcon />, text: "LOGOUT" }];

    const SidebarContent = (
        <div className="flex flex-col h-screen bg-black text-white w-64 shadow-lg font-['Merriweather']">
            <div className="p-4 border-b border-gray-400">
                <Link to="/">
                    <h1 className="text-3xl italic font-black text-red-700 [text-shadow:_0.125rem_0.125rem_0_rgba(255,255,255,0.85)]">J&A</h1>
                    <h2 className="text-l italic font-black text-red-700 [text-shadow:_0.125rem_0.125rem_0_rgba(255,255,255,0.85)]">CAR RENTAL</h2>
                </Link>
            </div>


            <nav className="flex-1 overflow-y-auto py-4">
                {navItems.map((item, index) => (
                    <React.Fragment key={item.to}>
                        <NavLink
                            to={item.to}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${isActive
                                    ? 'bg-gray-800 text-white'
                                    : 'text-blue-100 hover:bg-gray-700 hover:text-white'}`}>

                            <span className="mr-3">
                                {React.cloneElement(item.icon, {
                                    className: 'w-5 h-5',
                                    style: { verticalAlign: 'middle' }
                                })}
                            </span>
                            {item.text}
                        </NavLink>
                        {index < navItems.length - 1 && <hr className="border-gray-400" />}
                    </React.Fragment>
                ))}
            </nav>


            <div className="p-4 border-t border-gray-400">
                <div className="text-sm text-gray-400">
                    Admin Panel
                </div>
            </div>
        </div>

    );



    if (isMobile) {
        return (
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 230,
                        top: '56px', // Match AppBar height
                        height: 'calc(100% - 45px)',
                        borderRight: 'none',
                        backgroundColor: 'black',
                    },
                }}
            >
                {SidebarContent}
            </Drawer>
        );
    }

    // Desktop: show the fixed sidebar
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: 256,
                    borderRight: 'none',
                    backgroundColor: 'black',
                },
            }}
            open
        >
            {SidebarContent}
        </Drawer>
    );
}