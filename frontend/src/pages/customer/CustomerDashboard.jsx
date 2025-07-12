import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

function CustomerDashboard() {
  const userChosenCar = "Nissan Terra";
  // const userChosenCar = userData.bookedCarName;
  const cars = [
    {
      name: "Nissan Terra",
      type: "SUV",
      img: "/terra.png",
    },
    {
      name: "Toyota Avanza",
      type: "MPV",
      img: "/avanza.png",
    },
    {
      name: "Kia Rio",
      type: "Hatchback",
      img: "/kia.png",
    },
  ];
  let chosenCar = null;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].name === userChosenCar) {
      chosenCar = cars[i];
      break;
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        <Sidebar />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 flex-1">
          <DashboardCard title="SCHEDULE" subtitle="TODAY" link="/schedule">
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1">
                    Start Date
                  </th>
                  <th className="border border-gray-300 px-2 py-1">
                    Pick-up Time
                  </th>
                  <th className="border border-gray-300 px-2 py-1">End Date</th>
                  <th className="border border-gray-300 px-2 py-1">
                    Drop-off Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    3/10/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">6:30 AM</td>
                  <td className="border border-gray-300 px-2 py-1">
                    03/11/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">6:30 AM</td>
                </tr>
              </tbody>
            </table>
          </DashboardCard>
          <DashboardCard title="MY BOOKINGS" link="/my-bookings">
            {chosenCar ? (
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={chosenCar.img}
                    alt={chosenCar.name}
                    className="w-60 h-60 object-contain"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-xl font-semibold">{chosenCar.name}</p>
                    <p className="text-sm">{chosenCar.type}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <p className="text-sm font-bold">TOTAL BOOKINGS: 3</p>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">No booking yet.</p>
            )}
          </DashboardCard>
          <DashboardCard
            title="UNPAID"
            subtitle="SETTLEMENTS"
            link="/my-bookings"
          >
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-1">
                    Description
                  </th>
                  <th className="border border-gray-300 px-2 py-1">Amount</th>
                  <th className="border border-gray-300 px-2 py-1">
                    Payment Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    Booking Payment
                  </td>
                  <td className="border border-gray-300 px-2 py-1">3000</td>
                  <td className="border border-gray-300 px-2 py-1">Paid</td>
                </tr>
              </tbody>
            </table>
          </DashboardCard>
          <DashboardCard title="FAVORITE CAR">
            {chosenCar ? (
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={chosenCar.img}
                    alt={chosenCar.name}
                    className="w-60 h-60 object-contain"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-xl font-semibold">{chosenCar.name}</p>
                    <p className="text-sm">{chosenCar.type}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">No favorite car yet.</p>
            )}
          </DashboardCard>
        </main>
      </div>
    </div>
  );
}

export default CustomerDashboard;
