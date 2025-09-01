// src/pages/customer/CustomerBookingHistory.jsx
import React, { useMemo, useState } from 'react';
import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import { useBookingHistoryStore } from '../../customerstore/bookingHistoryStore';
import { bookingHistoryColumns } from '../customeraccessor/bookingHistoryColumns';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

export default function CustomerBookingHistory() {
  const allBookings = useBookingHistoryStore((state) => state.bookings);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const customerId = 1; // replace with logged-in customer ID

  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return allBookings.filter(
      (item) =>
        item.customerId === customerId &&
        ((item.carModel ?? '').toLowerCase().includes(term) ||
          (item.type ?? '').toLowerCase().includes(term) ||
          (item.status ?? '').toLowerCase().includes(term))
    );
  }, [allBookings, customerId, searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns: bookingHistoryColumns,
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
        <title>Booking History</title>

        {/* Header + Search */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-pathway text-2xl header-req">Booking History</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by car, type, or status..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              {table.getHeaderGroups().map((hg) => (
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
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
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
                  <td colSpan="6" className="p-4 text-center text-gray-500">
                    No booking history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-2 flex gap-2 pagination justify-center items-center">
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              ← Prev
            </button>
            <span>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
