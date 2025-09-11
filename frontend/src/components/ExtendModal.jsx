import React, { useState } from 'react';
import '../styles/customercss/customermybookings.css';

export default function ExtendModal({ show, booking, onClose, onConfirm }) {
  const [extensionDate, setExtensionDate] = useState('');

  if (!show || !booking) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ ...booking, extensionDate });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modals" onClick={(e) => e.stopPropagation()}>
        <h2>Extension Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="field-row">
            <label>Car Model:</label>
            <p>{booking.carModel}</p>
          </div>

          <div className="field-row">
            <label>Start Date:</label>
            <p>{booking.startDate}</p>
          </div>

          <div className="field-row">
            <label>End Date:</label>
            <p>{booking.endDate}</p>
          </div>

          <div className="field-row">
            <label>Extension Date:</label>
            <input
              type="date"
              value={extensionDate}
              onChange={(e) => setExtensionDate(e.target.value)}
              required
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              Request
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
