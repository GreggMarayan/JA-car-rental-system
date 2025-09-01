import React, { useState, useEffect, useMemo } from 'react';
import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import '../../styles/customercss/customer-body.css';
import { HiMagnifyingGlass, HiBookOpen, HiCreditCard } from 'react-icons/hi2';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

// Import separated accessor
import { bookingColumns } from '../customeraccessor/bookingColumns';
import { settlementColumns } from '../customeraccessor/settlementColumns';

// Import store
import { useBookingStore } from '../../customerstore/bookingStore';
import { useSettlementStore } from '../../customerstore/settlementStore';

export default function CustomerMyBookings() {
  const [searchTermBookings, setSearchTermBookings] = useState('');
  const [searchTermSettlements, setSearchTermSettlements] = useState('');
  const [activeTab, setActiveTab] = useState('bookings');

  const bookingsData = useBookingStore((state) => state.bookings);
  const settlementsData = useSettlementStore((state) => state.settlements);

  // Filter bookings
  const filteredBookings = useMemo(() => {
    const term = searchTermBookings.toLowerCase();
    return bookingsData.filter(
      (item) =>
        (item.carModel ?? '').toLowerCase().includes(term) ||
        (item.status ?? '').toLowerCase().includes(term) ||
        (item.pickupLocation ?? '').toLowerCase().includes(term)
    );
  }, [bookingsData, searchTermBookings]);

  // Filter settlements
  const filteredSettlements = useMemo(() => {
    const term = searchTermSettlements.toLowerCase();
    return settlementsData.filter(
      (item) =>
        (item.description ?? '').toLowerCase().includes(term) ||
        (item.status ?? '').toLowerCase().includes(term)
    );
  }, [settlementsData, searchTermSettlements]);

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const bookingsTable = useReactTable({
    data: filteredBookings,
    columns: bookingColumns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const settlementsTable = useReactTable({
    data: filteredSettlements,
    columns: settlementColumns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const getButtonClass = (tabName) => `user-type-btn ${activeTab === tabName ? 'active' : ''}`;

  return (
    <>
      <CustomerHeader />
      <CustomerSideBar />
      <div className="page-content">
        <title>My Bookings & Settlements</title>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 my-bookings">
          <button className={getButtonClass('bookings')} onClick={() => setActiveTab('bookings')}>
            <HiBookOpen className="inline-block mr-2 -mt-1" /> My Bookings
          </button>
          <button
            className={getButtonClass('settlements')}
            onClick={() => setActiveTab('settlements')}
          >
            <HiCreditCard className="inline-block mr-2 -mt-1" /> Settlements
          </button>
        </div>

        {/* My Bookings */}
        {activeTab === 'bookings' && (
          <>
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

            <div className="p-4 overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  {bookingsTable.getHeaderGroups().map((hg) => (
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
                  {bookingsTable.getRowModel().rows.length > 0 ? (
                    bookingsTable.getRowModel().rows.map((row) => (
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
                      <td colSpan="10" className="p-4 text-center text-gray-500">
                        No bookings found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="mt-2 flex gap-2 pagination justify-center items-center">
                <button
                  onClick={() => bookingsTable.previousPage()}
                  disabled={!bookingsTable.getCanPreviousPage()}
                >
                  ← Prev
                </button>
                <span>
                  {bookingsTable.getState().pagination.pageIndex + 1} of{' '}
                  {bookingsTable.getPageCount()}
                </span>
                <button
                  onClick={() => bookingsTable.nextPage()}
                  disabled={!bookingsTable.getCanNextPage()}
                >
                  Next →
                </button>
              </div>
            </div>
          </>
        )}

        {/* Settlements */}
        {activeTab === 'settlements' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-pathway text-2xl header-req">
                <HiCreditCard className="inline-block mr-2 -mt-1" />
                Settlements
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by description..."
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
          </>
        )}
      </div>
    </>
  );
}
