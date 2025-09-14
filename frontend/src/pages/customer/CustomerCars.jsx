import React, { useState } from 'react';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerSideBar from '../../components/CustomerSideBar';
import BookingModal from '../../components/BookingModal';
import '../../styles/customercss/customercars.css';
import '../../styles/customercss/bookingmodal.css';

export const allCars = [
  {
    id: 1,
    name: 'Nissan Terra 2019',
    type: 'SUV',
    transmission: 'Automatic',
    seats: 7,
    engine: 'Diesel',
    price: 3000,
    img: '/terra.png',
    availability: 'Available',
  },
  {
    id: 2,
    name: 'Toyota Avanza 2024',
    type: 'SUV',
    transmission: 'Automatic',
    seats: 7,
    engine: 'Gasoline',
    price: 3000,
    img: '/avanza.png',
    availability: 'Under Maintenance',
  },
  {
    id: 3,
    name: 'Kia Rio Hatchback 2014',
    type: 'Sedan',
    transmission: 'Automatic',
    seats: 5,
    engine: 'Gasoline',
    price: 3000,
    img: '/kia.png',
    availability: 'Available',
  },
  {
    id: 4,
    name: 'Toyota Hilux 2019',
    type: 'Pick Up',
    transmission: 'Manual',
    seats: 5,
    engine: 'Diesel',
    price: 3500,
    img: '/hilux.png',
    availability: 'Available',
  },
  {
    id: 5,
    name: 'Mirage GLX 2023',
    type: 'Sedan',
    transmission: 'Automatic',
    seats: 5,
    engine: 'Gasoline',
    price: 3200,
    img: '/mirage.png',
    availability: 'Not Available',
  },
  {
    id: 6,
    name: 'Nissan Navarra 2017',
    type: 'Pick Up',
    transmission: 'Automatic',
    seats: 5,
    engine: 'Diesel',
    price: 3400,
    img: '/Navarra.png',
    availability: 'Available',
  },
];

export default function CustomerCars() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleBookNowClick = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCar(null);
  };

  const handleBookingSubmit = (formData) => {
    console.log('Booking request submitted:', formData);
    // TODO: Submit booking data to your backend here
  };

  return (
    <>
      <CustomerHeader />
      <CustomerSideBar />

      <div className="page-content">
        <title>Available Cars</title>
        <h1 className="page-title">J & A Cars</h1>

        <div className="cars-container">
          {allCars.map((car) => {
            const isAvailable = car.availability === 'Available';
            const isUnderMaintenance = car.availability === 'Under Maintenance';
            const isNotAvailable = car.availability === 'Not Available';

            return (
              <div key={car.id} className="car-card modern-card">
                <img src={car.img} alt={car.name} className="car-image" />
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p>Type : {car.type}</p>
                  <p>Transmission : {car.transmission}</p>
                  <p>Seats : {car.seats}</p>
                  <p>Engine : {car.engine}</p>
                  <p>Rates : ₱{car.price}/Day</p>
                  <p
                    className={`availability-label ${isAvailable ? 'available' : isUnderMaintenance ? 'under-maintenance' : 'not-available'}`}
                  >
                    {car.availability}
                  </p>
                  <button
                    className={`book-now-btn ${isAvailable ? 'available' : 'disabled'}`}
                    disabled={!isAvailable}
                    onClick={() => handleBookNowClick(car)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <BookingModal
          show={showModal}
          car={selectedCar}
          onClose={handleCloseModal}
          onSubmit={handleBookingSubmit}
        />
      </div>
    </>
  );
}
