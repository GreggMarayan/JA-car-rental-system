import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBookingPage from './pages/admin/AdminBookingPage';
import AdminCarPage from './pages/admin/AdminCarPage';
import AdminManageUser from './pages/admin/AdminManageUser';
import AdminSchedulePage from './pages/admin/AdminSchedulePage';
import AdminTransactionPage from './pages/admin/AdminTransactionPage';
import AdminReportAnalytics from './pages/admin/AdminReportAnalytics';
import AdminSettings from './pages/admin/AdminSettings';

// judex components
import Cars from './pages/customer/Cars';
import BookingHistory from './pages/customer/BookingHistory';
import AccountSettings from './pages/customer/AccountSettings';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import MyBookings from './pages/customer/MyBookings';
import MyProfile from './pages/customer/MyProfile';
import Schedule from './pages/customer/Schedule';

function App() {
  return (
    <div className="h-[100vh] w-[98.9vw]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/manage-booking" element={<AdminBookingPage />} />
          <Route path="/manage-car" element={<AdminCarPage />} />
          <Route path="/manage-user" element={<AdminManageUser />} />
          <Route path="/schedule" element={<AdminSchedulePage />} />
          <Route path="/transaction-logs" element={<AdminTransactionPage />} />
          <Route path="/report-analytics" element={<AdminReportAnalytics />} />
          <Route path="/settings" element={<AdminSettings />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* judex routes start*/}
          <Route path="/cars" element={<Cars />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/customer-schedule" element={<Schedule />} />
          {/* judex routes emd*/}

          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
