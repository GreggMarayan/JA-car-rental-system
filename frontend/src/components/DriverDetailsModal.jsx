// src/components/DriverDetailsModal.jsx
import React from "react";

function DriverDetailsModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Driver Details</h2>
        <p>
          <strong>Name:</strong> John Doe
        </p>
        <p>
          <strong>Phone:</strong> 09123456789
        </p>
        <p>
          <strong>License No.:</strong> ABC-123456
        </p>
        <p>
          <strong>Experience:</strong> 5 years
        </p>
      </div>
    </div>
  );
}

export default DriverDetailsModal;
