import React, { useState } from 'react';
import '../styles/customercss/customermybookings.css';

export default function EditModal({ show, booking, cars, onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    startDate: booking?.startDate || '',
    pickupTime: booking?.pickupTime || '',
    pickupLocation: booking?.pickupLocation || '',
    endDate: booking?.endDate || '',
    dropoffTime: booking?.dropoffTime || '',
    dropoffLocation: booking?.dropoffLocation || '',
    carModel: booking?.carModel || '',
  });

  if (!show || !booking) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modals" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="field-row">
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-row">
            <label>Pick-Up Time:</label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-row">
            <label>Pick-Up Location:</label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-row">
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-row">
            <label>Drop-Off Time:</label>
            <input
              type="time"
              name="dropoffTime"
              value={formData.dropoffTime}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-row">
            <label>Drop-Off Location:</label>
            <input
              type="text"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field-row">
            <label>Car Model:</label>
            <select name="carModel" value={formData.carModel} onChange={handleChange} required>
              {cars.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              Confirm
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
