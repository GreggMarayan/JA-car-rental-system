import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";
import CarList from "../../components/CarList";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Nissan Navarra EL 2016",
    seats: "5 Seater",
    engine: "Diesel Engine",
    type: "Pick Up",
    status: "Available",
    img: "/Navarra.png",
  },
  {
    id: 2,
    name: "Toyota Avanza 2024",
    seats: "5-7 Seater",
    engine: "Gasoline Engine",
    type: "SUV",
    status: "Under Maintenance",
    img: "/avanza.png",
  },
  {
    id: 3,
    name: "Kia Rio Hatchback 2014",
    seats: "5 Seater",
    engine: "Gasoline Engine",
    type: "Sedan",
    status: "Available",
    img: "/kia.png",
  },
  {
    id: 4,
    name: "Nissan Terra 2018 EL",
    seats: "5-7 Seater",
    engine: "Diesel Engine",
    type: "SUV",
    status: "Available",
    img: "/terra.png",
  },
  {
    id: 5,
    name: "Mitsubishi Mirage 2023 GLX",
    seats: "5 Seater",
    engine: "Gasoline Engine",
    type: "Sedan",
    status: "Available",
    img: "/mirage.png",
  },
  {
    id: 6,
    name: "Toyota Hilux 2022",
    seats: "5 Seater",
    engine: "Diesel Engine",
    type: "Pick Up",
    status: "Not Available",
    img: "/hilux.png",
  },
];

function Cars() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        <Sidebar />
        <main className="px-8 py-12">
          <h1 className="text-4xl font-bold mb-8 flex justify-center italic">
            J&A CARS
          </h1>
          <CarList cars={cars} onBookNow={handleBookNow} />
        </main>
      </div>
    </div>
  );
}
export default Cars;
