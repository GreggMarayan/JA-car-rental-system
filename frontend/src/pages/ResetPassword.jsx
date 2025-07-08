import React, { useState } from "react";
import Header from "../components/Header";
import carImage from "/carImage.png";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Add  backend reset password API

    alert("Password reset successful. You can now log in.");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div
        className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${carImage})` }}
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/50" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6">
              <DialogTitle className="text-lg font-semibold text-center mb-4">
                Reset Your Password
              </DialogTitle>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center"
              >
                <div className="relative w-full mb-4">
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-center"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showPwd ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="relative w-full mb-4">
                  <input
                    type={showConfirmPwd ? "text" : "password"}
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 text-center"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showConfirmPwd ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                >
                  Reset Password
                </button>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default ResetPassword;
