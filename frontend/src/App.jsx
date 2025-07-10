import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-icons/fa";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BookNowPage from "./pages/BookNowPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
// import AdminDashboard from "./pages/admin/adminDashboard";
import CustomerDashboard from "./pages/customer/customerDashboard";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
