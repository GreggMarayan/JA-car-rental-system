import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

function BookingHistory() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex flex-col gap-4 p-4 w-full">
          <DashboardCard title="BOOKING HISTORY" subtitle="" link="/">
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
                    Car Model
                  </th>
                  <th className="border border-gray-300 px-8 py-0.5">Type</th>
                  <th className="border border-gray-300 px-8 py-0.5">
                    Start Date - End Date
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
                  <td className="border border-gray-300 px-2 py-1">Terra</td>
                  <td className="border border-gray-300 px-2 py-1">SUV </td>
                  <td className="border border-gray-300 px-2 py-1">
                    04/15/2025 - 04/18/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">3,000 </td>
                  <td className="border border-gray-300 px-2 py-1">
                    Completed
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    3/29/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">Terra</td>
                  <td className="border border-gray-300 px-2 py-1">SUV </td>
                  <td className="border border-gray-300 px-2 py-1">
                    05/01/2025 - 05/04/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">3,000 </td>
                  <td className="border border-gray-300 px-2 py-1">
                    Cancelled
                  </td>
                </tr>
              </tbody>
            </table>
          </DashboardCard>
        </main>
      </div>
    </div>
  );
}
export default BookingHistory;
