import React from "react";

function CarCard({ car, onBookNow }) {
  // Determine status color dynamically
  const getStatusColor = (status) => {
    if (status === "Available") return "text-green-600";
    if (status === "Not Available") return "text-red-600";
    if (status === "Under Maintenance") return "text-yellow-600";
    return "text-gray-600";
  };

  const handleBookNow = () => {
    if (car.status === "Available") {
      alert("You must login first!");
      onBookNow();
    } else {
      alert(`This car is currently ${car.status}. Booking is unavailable.`);
    }
  };

  return (
    <div className="text-center bg-white p-4 rounded shadow hover:shadow-md transition">
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-48 object-contain mb-4 hover:scale-105 transition-transform"
      />
      <p className="font-semibold text-center">{car.name}</p>
      <p>{car.seats}</p>
      <p>{car.engine}</p>
      <p>{car.type}</p>
      <p>{car.rates}</p>
      <p className={`font-bold ${getStatusColor(car.status)}`}>{car.status}</p>
      <button
        onClick={handleBookNow}
        className={`mt-2 px-4 py-2 rounded transition 
          ${
            car.status === "Available"
              ? "bg-red-500 text-white hover:bg-red-600 cursor-pointer"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        disabled={car.status !== "Available"}
      >
        Book Now →
      </button>
    </div>
  );
}

export default CarCard;
