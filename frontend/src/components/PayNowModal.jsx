import React from 'react';
import '../styles/customercss/customermybookings.css';

export default function PayNowModal({ show, settlement, onClose, onConfirm }) {
  if (!show || !settlement) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Payment</h2>

        <div className="field-row">
          <label>Description:</label>
          <p>{settlement.description}</p>
        </div>

        <div className="field-row">
          <label>Amount:</label>
          <p>₱{settlement.amount}</p>
        </div>

        <div className="btn-container">
          <button className="btn btn-primary" onClick={() => onConfirm(settlement)}>
            Pay Now
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
