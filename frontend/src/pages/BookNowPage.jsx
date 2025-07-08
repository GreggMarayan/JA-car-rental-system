import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginButton from "../components/LoginButton";

const cars = [
  {
    id: 1,
    name: "Nissan Navarra EL 2016",
    seats: "5 Seater",
    engine: "Diesel Engine",
    type: "Pick Up",
    status: "Available",
    img: "https://link-to-your-nissan-navarra-image.png",
  },
  {
    id: 2,
    name: "Toyota Avanza 2024",
    seats: "5-7 Seater",
    engine: "Gasoline Engine",
    type: "SUV",
    status: "Available",
    img: "https://link-to-your-toyota-avanza-image.png",
  },
  {
    id: 3,
    name: "Kia Rio Hatchback 2014",
    seats: "5 Seater",
    engine: "Gasoline Engine",
    type: "Sedan",
    status: "Available",
    img: "https://link-to-your-kia-rio-image.png",
  },
  {
    id: 4,
    name: "Nissan Terra 2018 EL",
    seats: "5-7 Seater",
    engine: "Diesel Engine",
    type: "SUV",
    status: "Available",
    img: "https://link-to-your-nissan-terra-image.png",
  },
  {
    id: 5,
    name: "Mitsubishi Mirage 2023 GLX",
    seats: "5 Seater",
    engine: "Gasoline Engine",
    type: "Sedan",
    status: "Available",
    img: "https://link-to-your-mirage-image.png",
  },
];

function BookNowPage() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/login"); // redirect to login if not logged in
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center px-8 py-4 bg-black text-white">
        <Header />
        <LoginButton />
      </div>

      <main className="px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">VIEW CARS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="text-center bg-white p-4 rounded shadow hover:shadow-md transition"
            >
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
                onClick={handleBookNow}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default BookNowPage;
