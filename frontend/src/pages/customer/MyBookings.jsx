import React, { useState } from 'react';
import Headerr from '../../components/Headerr';
// import Sidebar from '../../components/Sidebar';
import DashboardCard from '../../components/DashboardCard';

function MyBookings() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (action) => {
    setModalContent(action);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Headerr />
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        <main className="flex flex-col gap-4 p-4 w-full">
          <DashboardCard title="MY BOOKINGS" subtitle="">
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
                  <th className="border border-gray-300 px-8 py-0.5">Booking Date</th>
                  <th className="border border-gray-300 px-8 py-0.5">Start Date</th>
                  <th className="border border-gray-300 px-8 py-0.5">Pick-Up Time</th>
                  <th className="border border-gray-300 px-8 py-0.5">Pick-Up Location</th>
                  <th className="border border-gray-300 px-8 py-0.5">End Date</th>
                  <th className="border border-gray-300 px-8 py-0.5">Drop-Off Time</th>
                  <th className="border border-gray-300 px-8 py-0.5">Drop-Off Location</th>
                  <th className="border border-gray-300 px-8 py-0.5">Car Model</th>
                  <th className="border border-gray-300 px-8 py-0.5">Status</th>
                  <th className="border border-gray-300 px-8 py-0.5">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="border px-2 py-1">3/29/2025</td>
                  <td className="border px-2 py-1">3/31/2025</td>
                  <td className="border px-2 py-1">9:00 AM</td>
                  <td className="border px-2 py-1">FSUU</td>
                  <td className="border px-2 py-1">4/03/2025</td>
                  <td className="border px-2 py-1">9:00 AM</td>
                  <td className="border px-2 py-1">FSUU</td>
                  <td className="border px-2 py-1">Terra</td>
                  <td className="border px-2 py-1">Ongoing</td>
                  <td className="border px-2 py-1">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-xl hover:bg-red-600"
                      onClick={() => openModal('Extend')}
                    >
                      Extend
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">4/13/2025</td>
                  <td className="border px-2 py-1">4/13/2025</td>
                  <td className="border px-2 py-1">6:00 AM</td>
                  <td className="border px-2 py-1">Plaza</td>
                  <td className="border px-2 py-1">4/18/2025</td>
                  <td className="border px-2 py-1">6:00 AM</td>
                  <td className="border px-2 py-1">Plaza</td>
                  <td className="border px-2 py-1">Terra</td>
                  <td className="border px-2 py-1">Approved</td>
                  <td className="border px-2 py-1">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-xl hover:bg-red-600"
                      onClick={() => openModal('Cancel')}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">4/29/2025</td>
                  <td className="border px-2 py-1">4/29/2025</td>
                  <td className="border px-2 py-1">8:00 AM</td>
                  <td className="border px-2 py-1">Libertad</td>
                  <td className="border px-2 py-1">5/04/2025</td>
                  <td className="border px-2 py-1">8:00 AM</td>
                  <td className="border px-2 py-1">Libertad</td>
                  <td className="border px-2 py-1">Terra</td>
                  <td className="border px-2 py-1">Pending</td>
                  <td className="border px-2 py-1">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-xl hover:bg-red-600"
                      onClick={() => openModal('Edit')}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </DashboardCard>

          <DashboardCard title="SETTLEMENT" subtitle="">
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
                  <th className="border border-gray-300 px-8 py-0.5">Booking Date</th>
                  <th className="border border-gray-300 px-8 py-0.5">Description</th>
                  <th className="border border-gray-300 px-8 py-0.5">Amount</th>
                  <th className="border border-gray-300 px-8 py-0.5">Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="border px-2 py-1">3/29/2025</td>
                  <td className="border px-2 py-1">Reservation, Delivery & Driver Fee</td>
                  <td className="border px-2 py-1">3,000 </td>
                  <td className="border px-2 py-1">Paid</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">4/13/2025</td>
                  <td className="border px-2 py-1">Extension Fee</td>
                  <td className="border px-2 py-1">3,000</td>
                  <td className="border px-2 py-1">Unpaid</td>
                </tr>
              </tbody>
            </table>
          </DashboardCard>
        </main>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{modalContent} Booking</h2>
            <p className="mb-4">
              Are you sure you want to <strong>{modalContent.toUpperCase()}</strong> this booking?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`${modalContent} confirmed`);
                  closeModal();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBookings;
