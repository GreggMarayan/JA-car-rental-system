import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";

function MyProfile() {
  const user = {
    firstName: "Jude Christian",
    lastName: "Amoguis",
    address: "Butuan City, Agusan del Norte",
    email: "judechristian.amoguis@gmail.com",
    photo: "/jude.jpg", // ensure it is in /public
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

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold italic mb-8">My Profile</h1>

          <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
            {/* Left: Profile Picture + License */}
            <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0">
              <img
                src={user.photo}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover border-4 border-gray-300 mb-4"
              />

              {/* Driver's License Details */}
              <div className="text-center space-y-1">
                <h2 className="text-xl font-bold mb-2">Driver's License</h2>
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
            </div>

            {/* Right: Profile Details */}
            <div className="md:w-2/3 md:pl-20 space-y-4">
              <h2 className="text-2xl font-bold mb-2">Profile Details</h2>
              <p className="text-lg">
                <span className="font-semibold">First Name:</span>{" "}
                {user.firstName}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Last Name:</span>{" "}
                {user.lastName}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Address:</span> {user.address}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
            </div>
          </div>

          {/* Favorite Car */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Favorite Car</h2>
            <img
              src={user.favoriteCar.img}
              alt={user.favoriteCar.name}
              className="w-48 h-48 object-contain mx-auto mb-2"
            />
            <p className="text-lg font-semibold">{user.favoriteCar.name}</p>
            <p>{user.favoriteCar.type}</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyProfile;
