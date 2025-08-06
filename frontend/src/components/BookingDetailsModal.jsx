// src/components/BookingDetailsModal.jsx
import React from "react";

function BookingDetailsModal({ data, onClose, onDriverDetails }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-[350px] relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Booking Details</h2>

        <p>
          <strong>Customer name:</strong> John Mayer
        </p>
        <p>
          <strong>Car model:</strong> {data.carName}
        </p>
        <p>
          <strong>Car plate number:</strong> ZAB 7742
        </p>
        <p>
          <strong>Booking date:</strong> {new Date().toLocaleDateString()}
        </p>
        <p>
          <strong>Purpose:</strong> {data.purpose}
        </p>
        <p>
          <strong>Start date:</strong> {data.startDate}
        </p>
        <p>
          <strong>Pick-up time:</strong> {data.startTime}
        </p>
        <p>
          <strong>End date:</strong> {data.endDate}
        </p>
        <p>
          <strong>Drop-off time:</strong> {data.endTime}
        </p>
        <p>
          <strong>Pick-up location:</strong> {data.deliveryLocation || "Office"}
        </p>
        <p>
          <strong>Drop-off location:</strong> {data.dropOffLocation}
        </p>
        <p>
          <strong>Self-drive:</strong> {data.selfDrive}
        </p>
        <p>
          <strong>Phone number:</strong> {data.phone}
        </p>
        <p>
          <strong>FB link:</strong> {data.fbLink}
        </p>
        <p>
          <strong>Reservation Fee:</strong> ₱1,000.00
        </p>
        <p>
          <strong>Driver Fee:</strong> ₱500.00
        </p>
        <p>
          <strong>Total Rental Amount:</strong> ₱6,000.00
        </p>

        {/* Driver Details Link */}
        <p>
          <strong>Driver:</strong> John{" "}
          <button
            onClick={onDriverDetails}
            className="text-blue-600 underline ml-1"
          >
            More Details
          </button>
        </p>

        <button
          className="mt-4 w-full bg-green-600 text-white py-2 rounded"
          onClick={onClose}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
}

export default BookingDetailsModal;
