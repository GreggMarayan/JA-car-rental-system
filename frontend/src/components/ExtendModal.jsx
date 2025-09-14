import React, { useState } from 'react';

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
            <label className="field-labels">Car Model :</label>
            <p1>{booking.carModel}</p1>
          </div>

          <div className="field-row">
            <label className="field-labels">Start Date :</label>
            <p1>{booking.startDate}</p1>
          </div>

          <div className="field-row">
            <label className="field-labels">End Date :</label>
            <p1>{booking.endDate}</p1>
          </div>

          <div className="field-row">
            <label className="field-labels">Extension Date :</label>
            <input
              type="date"
              value={extensionDate}
              onChange={(e) => setExtensionDate(e.target.value)}
              required
            />
          </div>

          <div className="btn-container1">
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
