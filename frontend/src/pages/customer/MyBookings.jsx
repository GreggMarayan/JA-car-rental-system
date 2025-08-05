import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

function MyBookings() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex flex-col gap-4 p-4 w-full">
          <DashboardCard title="MY BOOKINGS" subtitle="" link="/">
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-8 py-0.5">
                    Booking Date
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Start Date
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Pick-Up Time
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Pick-Up Location
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    End Date
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Drop-Off Time
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Drop-Off Location
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Car Model
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">Status</th>
                  <th className="border border-gray-300 px-8 py-0.5"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    3/29/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    3/31/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">9:00 AM</td>
                  <td className="border border-gray-300 px-2 py-1">FSUU</td>
                  <td className="border border-gray-300 px-2 py-1">
                    4/03/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">9:00 AM</td>
                  <td className="border border-gray-300 px-2 py-1">FSUU</td>
                  <td className="border border-gray-300 px-2 py-1">Terra</td>
                  <td className="border border-gray-300 px-2 py-1">Ongoing</td>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-xl hover:bg-red-600"
                    onClick={() => alert("Button clicked!")}
                  >
                    Extend
                  </button>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    4/13/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    4/13/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">6:00 AM</td>
                  <td className="border border-gray-300 px-2 py-1">Plaza</td>
                  <td className="border border-gray-300 px-2 py-1">
                    4/18/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">6:00 AM</td>
                  <td className="border border-gray-300 px-2 py-1">Plaza</td>
                  <td className="border border-gray-300 px-2 py-1">Terra</td>
                  <td className="border border-gray-300 px-2 py-1">Approved</td>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-xl hover:bg-red-600"
                    onClick={() => alert("Button clicked!")}
                  >
                    Cancel
                  </button>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    4/29/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    4/29/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">8:00 AM</td>
                  <td className="border border-gray-300 px-2 py-1">Libertad</td>
                  <td className="border border-gray-300 px-2 py-1">
                    5/04/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">8:00 AM</td>
                  <td className="border border-gray-300 px-2 py-1">Libertad</td>
                  <td className="border border-gray-300 px-2 py-1">Terra</td>
                  <td className="border border-gray-300 px-2 py-1">Pending</td>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-xl hover:bg-red-600"
                    onClick={() => alert("Button clicked!")}
                  >
                    Edit
                  </button>
                </tr>
              </tbody>
            </table>
          </DashboardCard>
          <DashboardCard title="SETTLEMENT" subtitle="" link="/">
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-8 py-0.5">
                    Booking Date
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Description
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">Amount</th>
                  <th className="border border-gray-300 px-8 py-0.5">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    3/29/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    Reservation, Delivery & Driver Fee
                  </td>
                  <td className="border border-gray-300 px-2 py-1">3,000 </td>
                  <td className="border border-gray-300 px-2 py-1">Paid</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    4/13/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    Extension Fee
                  </td>
                  <td className="border border-gray-300 px-2 py-1">3,000</td>
                  <td className="border border-gray-300 px-2 py-1">Unpaid</td>
                </tr>
              </tbody>
            </table>
          </DashboardCard>
        </main>
      </div>
    </div>
  );
}
export default MyBookings;
