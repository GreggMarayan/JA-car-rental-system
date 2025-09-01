// src/pages/customer/CustomerSchedule.jsx
import React, { useMemo, useState } from 'react';
import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import { useScheduleStore } from '../../customerstore/scheduleStore';
import { scheduleColumns } from '../customeraccessor/scheduleColumns';
import { HiCalendar, HiMagnifyingGlass } from 'react-icons/hi2';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import '../../styles/customercss/customerschedule.css'; // Add your CSS here

export default function CustomerSchedulePage() {
  const allData = useScheduleStore((state) => state.reservations);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const customerId = 1; // Replace with real logged-in customer ID

  // Filter reservations
  const customerData = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return allData.filter(
      (item) =>
        item.customerId === customerId &&
        ((item.carModel ?? '').toLowerCase().includes(term) ||
          (item.pickupLocation ?? '').toLowerCase().includes(term))
    );
  }, [allData, customerId, searchTerm]);

  // Table setup
  const table = useReactTable({
    data: customerData,
    columns: scheduleColumns,
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
        <title>My Schedule</title>

        <div className="flex justify-between items-center mb-4">
          <h1 className="font-pathway text-2xl header-req">
            <HiCalendar className="inline-block mr-2 -mt-1" />
            My Schedule
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by car or location..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <HiMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="schedule-table p-4 overflow-x-auto">
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
                  <td colSpan="7" className="p-4 text-center text-gray-500">
                    No schedule found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

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
