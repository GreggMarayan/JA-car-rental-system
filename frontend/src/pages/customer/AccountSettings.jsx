import React, { useState } from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";
import { PencilIcon } from "@heroicons/react/24/solid";

function AccountSettings() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex justify-center items-start w-full py-10 px-4">
          <div className="bg-white p-6 rounded-2xl border border-black w-full max-w-4xl">
            {/* Tabs */}
            <div className="flex space-x-2 mb-4 border-b">
              <button
                className={`px-4 py-1 font-semibold transition-colors duration-200 cursor-pointer
                  ${
                    activeTab === "info"
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                onClick={() => setActiveTab("info")}
              >
                Info
              </button>
              <button
                className={`px-4 py-1 font-semibold transition-colors duration-200 cursor-pointer
                  ${
                    activeTab === "license"
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                onClick={() => setActiveTab("license")}
              >
                License
              </button>
            </div>

            {/* Info Tab */}
            {activeTab === "info" && (
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left: User Details */}
                <div className="flex-1 space-y-3">
                  {[
                    { label: "First Name:", value: "Jude Christian" },
                    { label: "Last Name:", value: "Amoguis" },
                    {
                      label: "Address:",
                      value: "Butuan City, Agusan Del Norte",
                    },
                    {
                      label: "Email:",
                      value: "judechristian.amoguis@gmail.com",
                    },
                    { label: "Birthdate:", value: "April 18, 1997" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="font-bold w-32 text-right mr-2">
                        {item.label}
                      </span>
                      <span className="border-b border-black flex-1 pb-0.5">
                        {item.value}
                      </span>
                      <PencilIcon className="w-4 h-4 ml-2 text-gray-500 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-150" />
                    </div>
                  ))}
                </div>

                {/* Right: Profile Picture + Username/Password */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative">
                    <img
                      src="/jude.jpg"
                      alt="profile"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 bg-black p-1 rounded-full hover:scale-110 transition-transform duration-150 cursor-pointer">
                      <PencilIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <input
                    type="text"
                    value="judeex18"
                    readOnly
                    className="bg-gray-200 px-3 py-1 rounded-full w-48 text-center"
                  />
                  <div className="relative w-48">
                    <input
                      type="password"
                      value="************"
                      readOnly
                      className="bg-gray-200 px-3 py-1 pr-8 rounded-full w-full text-center"
                    />
                    <PencilIcon className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-150" />
                  </div>
                </div>
              </div>
            )}

            {/* License Tab */}
            {activeTab === "license" && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: License Details */}
                <div className="space-y-4 w-full md:w-1/2">
                  {[
                    { label: "License No.", value: "N03-12-1234567" },
                    { label: "Restrictions", value: "1,2" },
                    { label: "Expiration Date", value: "December 20, 2026" },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-lg">{item.label}</p>
                      <div className="relative w-full">
                        <input
                          type="text"
                          value={item.value}
                          readOnly
                          className="bg-gray-200 px-4 py-2 pr-10 rounded-full w-full"
                        />
                        <PencilIcon className="w-5 h-5 text-gray-600 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-black hover:scale-110 transition-transform duration-150" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: License Image */}
                <div className="relative">
                  <img
                    src="/dlicense.png"
                    alt="Driver's License"
                    className="max-w-xs rounded-md"
                  />
                  <div className="absolute bottom-2 right-2 bg-black p-1 rounded-full hover:scale-110 transition-transform duration-150 cursor-pointer">
                    <PencilIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
