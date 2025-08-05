import React from "react";
import Headerr from "../../components/Headerr";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

function Schedule() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex flex-col gap-4 p-4 w-full">
          <DashboardCard title="SCHEDULE" subtitle="" link="/">
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
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-1">
                    04/15/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">6:00 AM</td>
                  <td className="border border-gray-300 px-2 py-1">Plaza </td>
                  <td className="border border-gray-300 px-2 py-1">
                    04/18/2025
                  </td>
                  <td className="border border-gray-300 px-2 py-1">6:00 AM </td>
                  <td className="border border-gray-300 px-2 py-1">Plaza</td>
                  <td className="border border-gray-300 px-2 py-1">Terra</td>
                </tr>
              </tbody>
            </table>
          </DashboardCard>
        </main>
      </div>
    </div>
  );
}
export default Schedule;
