import React, { useMemo, useState } from 'react';
import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import { useScheduleStore } from '../../store/schedule.js';
import { HiMagnifyingGlass, HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

export default function CustomerBookingHistoryPage() {
  const allData = useScheduleStore((state) => state.reservations);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const customerId = 1; // replace with real logged-in customer ID

  // Filter booking history
  const customerData = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return allData.filter(
      (item) =>
        item.customerId === customerId &&
        ((item.carModel ?? '').toLowerCase().includes(term) ||
          (item.type ?? '').toLowerCase().includes(term) ||
          (item.status ?? '').toLowerCase().includes(term))
    );
  }, [allData, customerId, searchTerm]);

  // Table columns
  const columns = [
    {
      header: 'Booking Date',
      accessorKey: 'bookingDate',
    },
    {
      header: 'Car',
      cell: (info) => {
        const row = info.row.original;
        return (
          <div className="flex items-center justify-center gap-2">
            {row.carImage ? (
              <img
                src={row.carImage}
                alt={row.carModel}
                className="w-12 h-8 object-cover rounded"
              />
            ) : (
              <div className="w-12 h-8 bg-gray-200 flex items-center justify-center rounded text-xs text-gray-500">
                N/A
              </div>
            )}
            <span>{row.carModel}</span>
          </div>
        );
      },
    },
    {
      header: 'Type',
      accessorKey: 'type',
    },
    {
      header: 'Start - End Date',
      cell: (info) => {
        const row = info.row.original;
        return (
          <span>
            {row.startDate} - {row.endDate}
          </span>
        );
      },
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
              status === 'Confirmed'
                ? 'bg-green-100 text-green-700'
                : status === 'Cancelled'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {status}
          </span>
        );
      },
    },
  ];

  // React Table setup
  const table = useReactTable({
    data: customerData,
    columns,
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
          <h1 className="font-pathway text-2xl header-req">
            <HiOutlineClipboardDocumentCheck className="inline-block mr-2 -mt-1" />
            Booking History
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by car, type, or status..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <HiMagnifyingGlass className="absolute left-3 top-3 text-gray-400" />
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

          {/* ✅ Pagination controls (same as MyBookings) */}
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
