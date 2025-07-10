import React from "react";

function CarCard({ car, onBookNow }) {
  return (
    <div className="text-center bg-white p-4 rounded shadow hover:shadow-md transition">
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-48 object-contain mb-4"
      />
      <p className="font-semibold">{car.name}</p>
      <p>{car.seats}</p>
      <p>{car.engine}</p>
      <p>{car.type}</p>
      <p className="text-green-600">{car.status}</p>
      <button
        onClick={() => {
          alert("You must login first!");
          onBookNow();
        }}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Book Now →
      </button>
    </div>
  );
}

export default CarCard;
