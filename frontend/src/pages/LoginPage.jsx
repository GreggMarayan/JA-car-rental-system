import React, { useState } from "react";
import Header from "../components/Header";
import carImage from "/carImage.png";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const [open, setOpen] = useState(true);

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
        <div
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: "5px",
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
            alt="Default Avatar"
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
            }}
          >
            LOGIN
          </h2>
          <input
            type="text"
            id="username"
            placeholder="Username"
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
          <div style={{ position: "relative", display: "inline-block" }}>
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
            {password && (
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "23px",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 100,
                }}
              >
                {showPwd ? (
                  <EyeSlashSolid
                    style={{ width: 18, height: 18, color: "rgb(0 0 0 / .7)" }}
                  />
                ) : (
                  <EyeSolid
                    style={{ width: 18, height: 18, color: "rgb(0 0 0 / .7)" }}
                  />
                )}
              </button>
            )}
          </div>
          <br />
          <button
            id="login"
            style={{
              backgroundColor: "#3F86F1",
              fontFamily: '"Pathway Gothic One", sans-serif',
              fontSize: "18px",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              width: "320px",
              marginBottom: "10px",
              boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
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
                width: "320px",
                marginBottom: "30px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, .7)",
              }}
            >
              Create an Account
            </button>
          </Link>
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="size-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Deactivate account
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Send Code
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default LoginPage;
