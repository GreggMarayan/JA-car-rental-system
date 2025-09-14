import React, { useState } from 'react';
import GcashModal from './GcashModal';

export default function PayNowModal({ show, settlement, onClose, onConfirm }) {
  const [showGcash, setShowGcash] = useState(false);

  if (!show || !settlement) return null;

  const handlePayNow = () => {
    // Close PayNowModal and open GcashModal
    setShowGcash(true);
  };

  const handleGcashClose = () => {
    setShowGcash(false);
    onClose(); // Close the PayNowModal fully after GCash closes
  };

  return (
    <>
      {!showGcash && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modals" onClick={(e) => e.stopPropagation()}>
            <h2>Payment</h2>

            <div className="field-row">
              <label className="field-labels">Description :</label>
              <p3>{settlement.description}</p3>
            </div>

            <div className="field-row">
              <label className="field-labels">Amount :</label>
              <p3>₱{settlement.amount}</p3>
            </div>

            <div className="btn-container2">
              <button className="btn btn-primary" onClick={handlePayNow}>
                Pay Now
              </button>
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gcash Modal */}
      <GcashModal
        show={showGcash}
        onClose={handleGcashClose}
        settlement={settlement}
        onSubmit={(data) => {
          console.log('GCash Payment Data:', data);
          onConfirm({ ...settlement, ...data });
          handleGcashClose();
        }}
      />
    </>
  );
}
