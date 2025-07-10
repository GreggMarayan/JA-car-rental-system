import React, { useState } from "react";
import Header from "../components/Header";
import carImage from "/carImage.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter your username and password.");
      return;
    }

    // BackEnd/Check ()
    const validUsername = "admin";
    const validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
      alert("Login successful!");
      navigate("/customer-dashboard");
    } else {
      alert("Login failed. Make sure your username and password are correct.");
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }
    // Optional Send code logic

    alert("Password reset instructions sent to your email.");
    setOpen(false);
    navigate("/reset-password");
  };

  return (
    <>
      <Header />
      <div
        className="m-0 p-0 h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${carImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          placeContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleLogin}>
          <div
            style={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              padding: "20px",
              width: "360px",
              height: "390px",
              marginTop: "60px",
              placeContent: "center",
              justifyItems: "center",
              boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
            }}
          >
            <img
              src="https://www.gravatar.com/avatar/?d=mp"
              alt=""
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                marginTop: "-100px",
              }}
            />
            <h2
              className="font-pathway"
              style={{
                fontSize: "36px",
                marginTop: "0",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </h2>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                backgroundColor: "#D9D9D9",
                fontFamily: '"Pathway Gothic One", sans-serif',
                fontSize: "18px",
                textAlign: "center",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                width: "300px",
                marginBottom: "10px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
              }}
            />
            <br />
            <input
              type={showPwd ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: "#D9D9D9",
                fontFamily: '"Pathway Gothic One", sans-serif',
                fontSize: "18px",
                textAlign: "center",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                width: "300px",
                marginBottom: "10px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
              }}
            />
            <br />
            <button
              type="submit"
              id="login"
              style={{
                backgroundColor: "#3F86F1",
                fontFamily: '"Pathway Gothic One", sans-serif',
                fontSize: "18px",
                border: "none",
                borderRadius: "5px",
                padding: "5px",
                width: "300px",
                marginBottom: "10px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
                color: "white",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <br />
            <a
              href="#"
              style={{
                fontFamily: '"Pathway Gothic One", sans-serif',
                textDecoration: "none",
                color: "rgb(0 0 0 / .7)",
              }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Forgot your password?
            </a>
            <br />
            <p
              style={{
                fontFamily: '"Pathway Gothic One", sans-serif',
                color: "rgb(0 0 0 / .7)",
              }}
            >
              OR
            </p>
            <Link to="/register">
              <button
                id="createAccount"
                style={{
                  backgroundColor: "#F13F3F",
                  fontFamily: '"Pathway Gothic One", sans-serif',
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "300px",
                  marginBottom: "30px",
                  boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
                }}
              >
                Create an Account
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* Start of Forgot Password Modal */}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <form onSubmit={handleForgotPasswordSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center size-12 rounded-full bg-red-100 mb-4">
                      <ExclamationTriangleIcon
                        aria-hidden="true"
                        className="size-6 text-red-600"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-center font-semibold text-gray-900"
                      >
                        Forgot Password?
                      </DialogTitle>
                      <div className="mt-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Enter your email address"
                          className="mt-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 p-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 flex flex-col items-center text-center">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-600 sm:ml-3 sm:w-auto"
                  >
                    Send Code
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default LoginPage;
