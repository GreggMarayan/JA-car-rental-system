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
import CustomerCars from './pages/customer/CustomerCars';
import CustomerBookingHistory from './pages/customer/CustomerBookingHistory';
import CustomerAccountSettings from './pages/customer/CustomerAccountSettings';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import CustomerMyBookings from './pages/customer/CustomerMyBookings';
import CustomerProfile from './pages/customer/CustomerProfile';
import CustomerSchedule from './pages/customer/CustomerSchedule';
import CustomerLogout from './pages/customer/CustomerLogout';

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
          <Route path="/customer-cars" element={<CustomerCars />} />
          <Route path="/customer-history" element={<CustomerBookingHistory />} />
          <Route path="/customer-account" element={<CustomerAccountSettings />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/customer-bookings" element={<CustomerMyBookings />} />
          <Route path="/customer-profile" element={<CustomerProfile />} />
          <Route path="/customer-schedule" element={<CustomerSchedule />} />
          <Route path="/customer-logout" element={<CustomerLogout />} />
          {/* judex routes end*/}

          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
