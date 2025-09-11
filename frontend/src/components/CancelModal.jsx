import React from 'react';
import '../styles/customercss/customermybookings.css';

export default function CancelModal({ show, booking, onClose, onConfirm }) {
  if (!show || !booking) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modals" onClick={(e) => e.stopPropagation()}>
        <h2>Request for Cancellation</h2>
        <div className="field-row">
          <p>Are you sure you want to cancel this booking?</p>
        </div>

        <div className="btn-container">
          <button className="btn btn-primary" onClick={() => onConfirm(booking.id)}>
            Yes
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
