import React from 'react';
import '../styles/customercss/customermybookings.css';

export default function GcashModal({ show, onClose, onSubmit, settlement }) {
  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const gcashNumber = e.target.gcashNumber.value;
    const referenceNumber = e.target.referenceNumber.value;

    onSubmit({ gcashNumber, referenceNumber });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modals" onClick={(e) => e.stopPropagation()}>
        <h2>Gcash Payment</h2>

        {/* QR Code Center */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <img src="/GcashQR.jpg" alt="GCash QR Code" style={{ width: '200px', height: '200px' }} />

          {/* Total Amount Below QR */}
          {settlement && (
            <p
              style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '20px', color: '#515151' }}
            >
              Total Amount : ₱{settlement.amount}
            </p>
          )}
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit}>
          <div className="field-row">
            <label className="field-labels">GCash Number:</label>
            <input type="text" name="gcashNumber" required />
          </div>

          <div className="field-row">
            <label className="field-labels">Reference Number:</label>
            <input type="text" name="referenceNumber" required />
          </div>

          <div className="btn-container3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
