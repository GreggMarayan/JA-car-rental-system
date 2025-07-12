import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-icons/fa";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BookNowPage from "./pages/BookNowPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import AccountSettings from "./pages/customer/AccountSettings";
import BookingHistory from "./pages/customer/BookingHistory";
import Cars from "./pages/customer/Cars";
import MyBookings from "./pages/customer/MyBookings";
import MyProfile from "./pages/customer/MyProfile";
import Schedule from "./pages/customer/Schedule";
import Logout from "./pages/customer/Logout";

function App() {
  return (
    <div className="h-[100vh] w-[98.9vw]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-now" element={<BookNowPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
