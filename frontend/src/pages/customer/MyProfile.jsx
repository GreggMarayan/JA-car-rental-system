import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard"; // assuming you have a reusable card

function MyProfile() {
  const user = {
    firstName: "Jude Christian",
    lastName: "Amoguis",
    address: "Butuan City, Agusan del Norte",
    email: "judechristian.amoguis@gmail.com",
    photo: "/jude.jpg", // must be placed inside /public
    license: {
      number: "AB123456",
      restriction: "1, 2",
      expiration: "12/31/2027",
    },
    favoriteCar: {
      name: "Nissan Terra 2018 EL",
      type: "SUV",
      img: "/terra.png",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        <Sidebar />

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 flex-1">
          {/* Profile Picture Card */}
          <DashboardCard title="Profile Image">
            <div className="flex justify-center">
              <img
                src={user.photo}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-300"
              />
            </div>
          </DashboardCard>

          {/* Personal Details Card */}
          <DashboardCard title="Personal Details">
            <div className="space-y-2 text-lg">
              <p>
                <span className="font-semibold">First Name:</span>{" "}
                {user.firstName}
              </p>
              <p>
                <span className="font-semibold">Last Name:</span>{" "}
                {user.lastName}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {user.address}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
            </div>
          </DashboardCard>

          {/* Driver's License Card */}
          <DashboardCard title="Driver's License">
            <div className="space-y-2 text-lg">
              <p>
                <span className="font-semibold">License No:</span>{" "}
                {user.license.number}
              </p>
              <p>
                <span className="font-semibold">Restriction:</span>{" "}
                {user.license.restriction}
              </p>
              <p>
                <span className="font-semibold">Expiration:</span>{" "}
                {user.license.expiration}
              </p>
            </div>
          </DashboardCard>

          {/* Favorite Car Card */}
          <DashboardCard title="Favorite Car">
            <div className="flex flex-col items-center">
              <img
                src={user.favoriteCar.img}
                alt={user.favoriteCar.name}
                className="w-48 h-48 object-contain mb-2"
              />
              <p className="text-lg font-semibold">{user.favoriteCar.name}</p>
              <p className="text-gray-600">{user.favoriteCar.type}</p>
            </div>
          </DashboardCard>
        </main>
      </div>
    </div>
  );
}

export default MyProfile;
