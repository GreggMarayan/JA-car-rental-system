import React from "react";
import CarCard from "./CarCard";

function CarList({ cars, onBookNow }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onBookNow={onBookNow} />
      ))}
    </div>
  );
}

export default CarList;
