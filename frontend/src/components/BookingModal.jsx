import React, { useState } from 'react';

export default function BookingModal({ show, car, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    purpose: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    deliveryLocation: '',
    dropOffLocation: '',
    selfDrive: 'Yes',
    phone: '',
    fbLink: '',
    driverName: '',
    selectedDriver: '',
  });

  const [tab, setTab] = useState('deliver');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDriverDetails, setShowDriverDetails] = useState(false);

  // Example drivers with details
  const availableDrivers = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      experience: '10 years',
      license: 'Professional',
      phone: '0917-123-4567',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 29,
      experience: '6 years',
      license: 'Professional',
      phone: '0917-987-6543',
    },
    {
      id: 3,
      name: 'Paul Brown',
      age: 42,
      experience: '15 years',
      license: 'Professional',
      phone: '0917-555-1234',
    },
  ];

  // Fixed fees
  const reservationFee = 500;
  const driverFeePerDay = 1000;

  // Helper: calculate rental days
  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))); // at least 1 day
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTabChange = (tab) => {
    setTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmBooking = () => {
    const days = calculateDays(formData.startDate, formData.endDate);
    const rental = days * car.price;
    const driverFee = formData.selfDrive === 'No' ? days * driverFeePerDay : 0;
    const total = rental + reservationFee + driverFee;

    const bookingData = {
      ...formData,
      car: {
        name: car.name,
        type: car.type,
        transmission: car.transmission,
        seats: car.seats,
        engine: car.engine,
        price: car.price,
      },
      days,
      rental,
      reservationFee,
      driverFee,
      total,
    };

    onSubmit(bookingData);
    onClose();
  };

  const handleCancelConfirmation = () => {
    setShowConfirmation(false);
  };

  if (!show || !car) return null;

  // Find selected driver object (if any)
  const selectedDriverObj = availableDrivers.find(
    (driver) => driver.name === formData.selectedDriver
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab-btn ${tab === 'deliver' ? 'active' : ''}`}
            onClick={() => handleTabChange('deliver')}
          >
            Deliver
          </button>
          <button
            className={`tab-btn ${tab === 'pickup' ? 'active' : ''}`}
            onClick={() => handleTabChange('pickup')}
          >
            Pickup
          </button>
        </div>

        <h1 style={{ margin: '0 0 5px 0' }}>Book {car.name}</h1>

        {!showConfirmation ? (
          <form onSubmit={handleSubmit}>
            <div className="field-row">
              <label className="field-label">Purpose</label>
              <input
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Purpose of Booking"
                required
              />
            </div>

            <div className="field-row">
              <label className="field-label">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="field-row">
              <label className="field-label">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="field-row">
              <label className="field-label">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="field-row">
              <label className="field-label">End Time</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                required
              />
            </div>

            {tab === 'deliver' && (
              <div className="field-row">
                <label className="field-label">Delivery Location</label>
                <input
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleInputChange}
                  placeholder="Delivery Location"
                  required
                />
              </div>
            )}

            {tab === 'pickup' && (
              <div className="field-row">
                <label className="field-label">Pickup Location</label>
                <input
                  name="dropOffLocation"
                  value={formData.dropOffLocation}
                  onChange={handleInputChange}
                  placeholder="Pickup Location"
                  required
                />
              </div>
            )}

            <div className="field-row">
              <label className="field-label">Self-drive</label>
              <select
                name="selfDrive"
                value={formData.selfDrive}
                onChange={handleInputChange}
                required
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            {formData.selfDrive === 'No' && (
              <div className="field-row">
                <label className="field-label">Select Driver</label>
                <select
                  name="selectedDriver"
                  value={formData.selectedDriver}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a Driver</option>
                  {availableDrivers.map((driver) => (
                    <option key={driver.id} value={driver.name}>
                      {driver.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="field-row">
              <label className="field-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="field-row">
              <label className="field-label">Facebook Link</label>
              <input
                name="fbLink"
                value={formData.fbLink}
                onChange={handleInputChange}
                placeholder="Facebook Profile URL"
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
        ) : (
          <div>
            <h2>Confirm Booking</h2>
            <p>
              <strong>Car:</strong> {car.name}
            </p>
            <p>
              <strong>Type:</strong> {car.type}
            </p>
            <p>
              <strong>Seats:</strong> {car.seats}
            </p>
            <p>
              <strong>Engine:</strong> {car.engine}
            </p>
            <p>
              <strong>Rate:</strong> ₱{car.price}/Day
            </p>

            <p>
              <strong>Purpose:</strong> {formData.purpose}
            </p>
            <p>
              <strong>Start:</strong> {formData.startDate} {formData.startTime}
            </p>
            <p>
              <strong>End:</strong> {formData.endDate} {formData.endTime}
            </p>
            <p>
              <strong>{tab === 'deliver' ? 'Delivery' : 'Pickup'} Location:</strong>{' '}
              {formData[tab === 'deliver' ? 'deliveryLocation' : 'dropOffLocation']}
            </p>
            <p>
              <strong>Self-Drive:</strong> {formData.selfDrive}
            </p>

            {/* Driver section with More Details toggle */}
            {formData.selfDrive === 'No' && (
              <div>
                <p>
                  <strong>Driver:</strong> {formData.selectedDriver}
                </p>
                {formData.selectedDriver && (
                  <div>
                    <button
                      type="button"
                      className="btn-link"
                      onClick={() => setShowDriverDetails(!showDriverDetails)}
                    >
                      {showDriverDetails ? 'Hide details' : 'More details'}
                    </button>

                    {showDriverDetails && selectedDriverObj && (
                      <div className="driver-details">
                        <p>
                          <strong>Name:</strong> {selectedDriverObj.name}
                        </p>
                        <p>
                          <strong>Age:</strong> {selectedDriverObj.age}
                        </p>
                        <p>
                          <strong>Experience:</strong> {selectedDriverObj.experience}
                        </p>
                        <p>
                          <strong>License:</strong> {selectedDriverObj.license}
                        </p>
                        <p>
                          <strong>Phone:</strong> {selectedDriverObj.phone}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Facebook Profile:</strong> {formData.fbLink}
            </p>

            <hr />
            <h3>Cost Breakdown</h3>
            {(() => {
              const days = calculateDays(formData.startDate, formData.endDate);
              const rental = days * car.price;
              const driverFee = formData.selfDrive === 'No' ? days * driverFeePerDay : 0;
              const total = rental + reservationFee + driverFee;

              return (
                <>
                  <p>
                    <strong>Rental Days:</strong> {days} day(s)
                  </p>
                  <p>
                    <strong>Car Rate:</strong> ₱{car.price} / day
                  </p>
                  <p>
                    <strong>Rental Amount:</strong> ₱{rental}
                  </p>
                  <p>
                    <strong>Reservation Fee:</strong> ₱{reservationFee}
                  </p>
                  {driverFee > 0 && (
                    <p>
                      <strong>Driver Fee:</strong> ₱{driverFee}
                    </p>
                  )}
                  <p>
                    <strong>Total:</strong> ₱{total}
                  </p>
                </>
              );
            })()}

            <div className="btn-container">
              <button className="btn btn-primary" onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
              <button className="btn btn-secondary" onClick={handleCancelConfirmation}>
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
