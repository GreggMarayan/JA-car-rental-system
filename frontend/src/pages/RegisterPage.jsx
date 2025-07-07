import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Header from "../components/Header";
import carImage from "/carImage.png";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const renamedFile = new File([file], "drivers_license_image.png", {
        type: file.type,
      });
      // handle renamedFile for upload
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate & save data here
    navigate("/register-next");
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center p-4 relative"
        style={{ backgroundImage: `url(${carImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-md p-6 overflow-y-auto max-h-[90vh]">
          <h1 className="text-center text-2xl font-bold mb-6">
            CREATE A NEW ACCOUNT
          </h1>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                USERNAME
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">NAME</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex-1 p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                ADDRESS
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                CONTACT NUMBER
              </label>
              <input
                type="text"
                placeholder="Enter your contact number"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Driver’s License Number */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                DRIVER'S LICENSE NUMBER
              </label>
              <input
                type="text"
                placeholder="License number"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Driver’s License Expiry Date */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                DRIVER'S LICENSE EXPIRY DATE
              </label>
              <input
                type="date"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
                required
              />
            </div>

            {/* Restrictions */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                RESTRICTIONS
              </label>
              <input
                type="text"
                placeholder="CODE"
                className="p-2 rounded bg-gray-200 placeholder-gray-600 focus:outline-none w-full"
              />
            </div>

            {/* License Image Upload */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                LICENSE IMAGE
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  id="licenseUpload"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="licenseUpload"
                  className="flex items-center space-x-2 p-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
                >
                  <FaUpload />
                  <span>Upload License ID</span>
                </label>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" required />
              <p className="text-sm">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Terms and Conditions
                </button>
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 p-2 bg-gray-300 rounded font-bold hover:bg-green-500 transition-colors w-full"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto relative">
            <h2 className="text-xl font-bold mb-4 text-center">
              Terms and Conditions
            </h2>
            <div className="text-sm space-y-4 text-justify">
              <div>
                <h3 className="font-semibold">Cancellation Policy</h3>
                <p>
                  For any Cancellation or No-Show, the following fees apply:
                  <br />
                  • 1 month or more ahead of rental: FREE
                  <br />
                  • 30 – 10 days ahead of rental: 1-day rental fee*
                  <br />
                  • 9 – 3 days ahead of rental: 50% of the total rental fee*
                  <br />
                  • 3 days or less & no show: 100% of rental fee*
                  <br />
                  Minimum cancellation fee is 1,000 pesos for any rule, and in
                  any case, if the calculated cancellation fee is below 1,000
                  PHP.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Identification of the Rental Vehicle & Vehicle Classes
                </h3>
                <p>
                  The customer has the right to reserve and book any class of
                  car, confirmed by Butuan Car Rental, but no right on a
                  specific make, model, car, or color. The right is limited to
                  the booked class of vehicle. BCR can switch between cars of
                  the same class or upgrade the customer to the next higher
                  class as follows:
                  <br />
                  • Compact Manual (KIA RIO)
                  <br />
                  • Compact Automatic (MIRAGE G4)
                  <br />
                  • Pick-up 5-seater Manual (NISSAN NAVARA)
                  <br />
                  • SUV 7-Seater Automatic (NISSAN TERRA)
                  <br />• SUV 7-Seater Automatic (TOYOTA AVANZA)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Rental Term</h3>
                <p>
                  The term of this Car Rental Agreement runs from the date and
                  hour of vehicle pickup as indicated in the individual Car
                  Rental Agreement until the return of the vehicle to Owner and
                  completion of all terms of this Car Rental Agreement by both
                  Parties. The Parties may shorten or extend the estimated term
                  of rental by mutual consent. A refund for early return is not
                  applicable. In case of delayed return without prior notice of
                  at least 6 hours ahead of the scheduled return time according
                  to this agreement, the owner is eligible to consider the car
                  as stolen. Furthermore, a fee of 250 PHP per hour will be
                  imposed starting from the minute of the latest agreed return
                  time. If the return delay exceeds more than 2 hours, a full
                  daily rate as well as possible compensation for the loss of a
                  following booking, at exactly the value of the lost booking,
                  will be charged.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
              aria-label="Close"
            >
              ✕
            </button>
            <button
              onClick={() => setShowTerms(false)}
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors w-full"
            >
              I Agree
            </button>
          </div>
        </div>
      )}
    </>
  );
}
