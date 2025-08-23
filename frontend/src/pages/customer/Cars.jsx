// src/pages/customer/Cars.jsx
import React, { useState } from 'react';
import Headerr from '../../components/Headerr';
// import Sidebar from '../../components/Sidebar';
import CarList from '../../components/CarList';
import BookingModal from '../../components/BookingModal';
import BookingDetailsModal from '../../components/BookingDetailsModal';
import DriverDetailsModal from '../../components/DriverDetailsModal';

const cars = [
  {
    id: 1,
    name: 'Nissan Navarra EL 2016',
    seats: '5 Seater',
    engine: 'Diesel Engine',
    type: 'Pick Up',
    rates: '₱3,000/Day',
    status: 'Available',
    img: '/Navarra.png',
  },
  {
    id: 2,
    name: 'Toyota Avanza 2024',
    seats: '5-7 Seater',
    engine: 'Gasoline Engine',
    type: 'SUV',
    rates: '₱3,000/Day',
    status: 'Under Maintenance',
    img: '/avanza.png',
  },
  {
    id: 3,
    name: 'Kia Rio Hatchback 2014',
    seats: '5 Seater',
    engine: 'Gasoline Engine',
    type: 'Sedan',
    rates: '₱3,000/Day',
    status: 'Available',
    img: '/kia.png',
  },
  {
    id: 4,
    name: 'Nissan Terra 2018 EL',
    seats: '5-7 Seater',
    engine: 'Diesel Engine',
    type: 'SUV',
    rates: '₱3,000/Day',
    status: 'Available',
    img: '/terra.png',
  },
  {
    id: 5,
    name: 'Mitsubishi Mirage 2023 GLX',
    seats: '5 Seater',
    engine: 'Gasoline Engine',
    type: 'Sedan',
    rates: '₱3,000/Day',
    status: 'Available',
    img: '/mirage.png',
  },
  {
    id: 6,
    name: 'Toyota Hilux 2022',
    seats: '5 Seater',
    engine: 'Diesel Engine',
    type: 'Pick Up',
    rates: '₱3,000/Day',
    status: 'Not Available',
    img: '/hilux.png',
  },
];

function Cars() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [showDriverDetails, setShowDriverDetails] = useState(false);

  const handleBookNow = (car) => {
    setSelectedCar(car);
  };

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    setSelectedCar(null); // Close booking modal
  };

  const closeBookingModal = () => setSelectedCar(null);
  const closeDetailsModal = () => setBookingData(null);
  const openDriverDetails = () => setShowDriverDetails(true);
  const closeDriverDetails = () => setShowDriverDetails(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <main className="px-8 py-12 w-full">
          <h1 className="text-4xl font-bold mb-8 flex justify-center italic">J&A CARS</h1>
          <CarList cars={cars} onBookNow={handleBookNow} />
        </main>
      </div>

      {selectedCar && (
        <BookingModal
          car={selectedCar}
          onClose={closeBookingModal}
          onSubmit={handleBookingSubmit}
        />
      )}

      {bookingData && (
        <BookingDetailsModal
          data={bookingData}
          onClose={closeDetailsModal}
          onDriverDetails={openDriverDetails}
        />
      )}

      {showDriverDetails && <DriverDetailsModal onClose={closeDriverDetails} />}
    </div>
  );
}

export default Cars;
