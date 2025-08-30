import React, { useState, useEffect, useMemo } from 'react';
import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import { HiMagnifyingGlass, HiBookOpen, HiCreditCard } from 'react-icons/hi2';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

export default function CustomerMyBookings() {
  const [allBookings, setAllBookings] = useState([]);
  const [allSettlements, setAllSettlements] = useState([]);
  const [searchTermBookings, setSearchTermBookings] = useState('');
  const [searchTermSettlements, setSearchTermSettlements] = useState('');
  const customerId = 1; // Replace with logged-in user id

  // Fetch bookings
  useEffect(() => {
    fetch(`/api/customer/bookings?customerId=${customerId}`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data))
      .catch((err) => console.error(err));
  }, [customerId]);

  // Fetch settlements
  useEffect(() => {
    fetch(`/api/customer/settlements?customerId=${customerId}`)
      .then((res) => res.json())
      .then((data) => setAllSettlements(data))
      .catch((err) => console.error(err));
  }, [customerId]);

  // Filter bookings
  const filteredBookings = useMemo(() => {
    const term = searchTermBookings.toLowerCase();
    return allBookings.filter(
      (item) =>
        (item.carModel ?? '').toLowerCase().includes(term) ||
        (item.status ?? '').toLowerCase().includes(term) ||
        (item.pickupLocation ?? '').toLowerCase().includes(term)
    );
  }, [allBookings, searchTermBookings]);

  // Filter settlements
  const filteredSettlements = useMemo(() => {
    const term = searchTermSettlements.toLowerCase();
    return allSettlements.filter(
      (item) =>
        (item.description ?? '').toLowerCase().includes(term) ||
        (item.status ?? '').toLowerCase().includes(term)
    );
  }, [allSettlements, searchTermSettlements]);

  // ✅ Table setup for Settlements
  const settlementColumns = [
    {
      header: 'Booking Date',
      accessorKey: 'bookingDate',
    },
    {
      header: 'Description',
      accessorKey: 'description',
    },
    {
      header: 'Amount',
      accessorKey: 'amount',
      cell: (info) => <span className="font-semibold text-green-600">${info.getValue()}</span>,
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (info) => {
        const status = info.getValue();
        return (
          <span
            className={`px-2 py-1 rounded text-sm font-medium ${
              status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      header: 'Actions',
      cell: (info) => {
        const row = info.row.original;
        return row.status === 'Unpaid' ? (
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Pay Now
          </button>
        ) : null;
      },
    },
  ];

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const settlementsTable = useReactTable({
    data: filteredSettlements,
    columns: settlementColumns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <CustomerHeader />
      <CustomerSideBar />

      <div className="page-content">
        <title>My Bookings & Settlements</title>

        {/* ================= My Bookings ================= */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-pathway text-2xl header-req">
            <HiBookOpen className="inline-block mr-2 -mt-1" />
            My Bookings
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by car, location, or status..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTermBookings}
              onChange={(e) => setSearchTermBookings(e.target.value)}
            />
            <HiMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* ✅ This is your original Bookings table (unchanged) */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border text-center font-pathway">Booking Date</th>
                <th className="p-2 border text-center font-pathway">Start Date</th>
                <th className="p-2 border text-center font-pathway">Pick Up Time</th>
                <th className="p-2 border text-center font-pathway">Pick Up Location</th>
                <th className="p-2 border text-center font-pathway">End Date</th>
                <th className="p-2 border text-center font-pathway">Drop Off Time</th>
                <th className="p-2 border text-center font-pathway">Drop Off Location</th>
                <th className="p-2 border text-center font-pathway">Car Model</th>
                <th className="p-2 border text-center font-pathway">Status</th>
                <th className="p-2 border text-center font-pathway">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking, index) => (
                  <tr key={index} className="border-t font-pathway">
                    <td className="p-2 border text-center">{booking.bookingDate}</td>
                    <td className="p-2 border text-center">{booking.startDate}</td>
                    <td className="p-2 border text-center">{booking.pickupTime}</td>
                    <td className="p-2 border text-center">{booking.pickupLocation}</td>
                    <td className="p-2 border text-center">{booking.endDate}</td>
                    <td className="p-2 border text-center">{booking.dropoffTime}</td>
                    <td className="p-2 border text-center">{booking.dropoffLocation}</td>
                    <td className="p-2 border text-center">{booking.carModel}</td>
                    <td className="p-2 border text-center">
                      <span>{booking.status}</span>
                    </td>
                    <td className="p-2 border text-center">
                      {booking.status === 'Ongoing' && (
                        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                          Extension
                        </button>
                      )}
                      {booking.status === 'Approved' && (
                        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                          Cancel
                        </button>
                      )}
                      {booking.status === 'Pending' && (
                        <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="p-4 text-center text-gray-500">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= Settlements ================= */}
        <div className="flex justify-between items-center mb-4 mt-10">
          <h1 className="font-pathway text-2xl header-req">
            <HiCreditCard className="inline-block mr-2 -mt-1" />
            Settlements
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by description or status..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTermSettlements}
              onChange={(e) => setSearchTermSettlements(e.target.value)}
            />
            <HiMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              {settlementsTable.getHeaderGroups().map((hg) => (
                <tr key={hg.id}>
                  {hg.headers.map((header) => (
                    <th key={header.id} className="p-2 border text-center font-pathway">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {settlementsTable.getRowModel().rows.length > 0 ? (
                settlementsTable.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border-t font-pathway">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-2 border text-center">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-4 text-center text-gray-500">
                    No settlements found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* ✅ Pagination controls */}
          <div className="mt-2 flex gap-2 pagination justify-center items-center">
            <button
              onClick={() => settlementsTable.previousPage()}
              disabled={!settlementsTable.getCanPreviousPage()}
            >
              ← Prev
            </button>
            <span>
              {settlementsTable.getState().pagination.pageIndex + 1} of{' '}
              {settlementsTable.getPageCount()}
            </span>
            <button
              onClick={() => settlementsTable.nextPage()}
              disabled={!settlementsTable.getCanNextPage()}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
