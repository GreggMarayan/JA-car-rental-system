import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear tokens or session data here
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect if you want after delay
    // setTimeout(() => navigate("/login"), 2000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          You have been logged out
        </h1>
        <p className="text-gray-600">
          Thank you for visiting. See you next time!
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Logout;
