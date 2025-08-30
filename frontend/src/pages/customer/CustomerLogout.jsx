import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/customercss/customerlogoutmodal.css'; // Import the CSS file

function CustomerLogout() {
  const [showModal, setShowModal] = useState(true); // To show/hide modal
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens or session data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    navigate(-1); // Navigate to the previous page
  };

  if (!showModal) return null; // If showModal is false, don't render the modal

  return (
    <div className="modal-overlay1" onClick={handleCloseModal}>
      <div className="modal1" onClick={(e) => e.stopPropagation()}>
        <h1>Are you sure you want to log out?</h1>
        <div className="btn-containern">
          <button onClick={handleLogout} className="save-btnn">
            Yes, Logout
          </button>
          <button
            onClick={handleCloseModal} // Close the modal and go back to the previous page
            className="cancel-btnn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogout;
