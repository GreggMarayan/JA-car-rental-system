import React, { useState, useMemo } from 'react';
import CustomerSideBar from '../../components/CustomerSideBar';
import CustomerHeader from '../../components/CustomerHeader';
import '../../styles/customercss/customermybookings.css';
import { HiBookOpen, HiCreditCard } from 'react-icons/hi2';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

// Accessors
import { bookingColumns as baseBookingColumns } from '../customeraccessor/bookingColumns';
import { settlementColumns as baseSettlementColumns } from '../customeraccessor/settlementColumns';

// Stores
import { useBookingStore } from '../../customerstore/bookingStore';
import { useSettlementStore } from '../../customerstore/settlementStore';

// Modals
import ExtendModal from '../../components/ExtendModal';
import CancelModal from '../../components/CancelModal';
import EditModal from '../../components/EditModal';
import PayNowModal from '../../components/PayNowModal';
import SearchBar from '../../components/SearchBar';

export default function CustomerMyBookings() {
  const [searchTermBookings, setSearchTermBookings] = useState('');
  const [searchTermSettlements, setSearchTermSettlements] = useState('');
  const [activeTab, setActiveTab] = useState('bookings');

  const bookingsData = useBookingStore((state) => state.bookings);
  const settlementsData = useSettlementStore((state) => state.settlements);

  // Modal states
  const [showExtendModal, setShowExtendModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Modal handlers
  const handleExtendClick = (booking) => {
    setSelectedBooking(booking);
    setShowExtendModal(true);
  };
  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
    setShowCancelModal(true);
  };
  const handleEditClick = (booking) => {
    setSelectedBooking(booking);
    setShowEditModal(true);
  };
  const handlePayNowClick = (settlement) => {
    setSelectedPayment(settlement);
    setShowPaymentModal(true);
  };

  // Modal confirm handlers
  const handleExtendConfirm = (updatedBooking) => {
    console.log('Extend requested:', updatedBooking);
    setShowExtendModal(false);
    setSelectedBooking(null);
  };
  const handleCancelConfirm = (booking) => {
    console.log('Cancelled booking:', booking);
    setShowCancelModal(false);
    setSelectedBooking(null);
  };
  const handleEditConfirm = (updatedBooking) => {
    console.log('Edited booking:', updatedBooking);
    setShowEditModal(false);
    setSelectedBooking(null);
  };
  const handlePaymentConfirm = (paymentData) => {
    console.log('Payment confirmed:', paymentData);
    setShowPaymentModal(false);
    setSelectedPayment(null);
  };

  // Filtered data
  const filteredBookings = useMemo(() => {
    const term = searchTermBookings.toLowerCase();
    return bookingsData.filter(
      (b) =>
        (b.carModel ?? '').toLowerCase().includes(term) ||
        (b.status ?? '').toLowerCase().includes(term) ||
        (b.pickupLocation ?? '').toLowerCase().includes(term)
    );
  }, [bookingsData, searchTermBookings]);

  const filteredSettlements = useMemo(() => {
    const term = searchTermSettlements.toLowerCase();
    return settlementsData.filter(
      (s) =>
        (s.description ?? '').toLowerCase().includes(term) ||
        (s.status ?? '').toLowerCase().includes(term)
    );
  }, [settlementsData, searchTermSettlements]);

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  // Inject action buttons into booking columns
  const bookingColumns = useMemo(() => {
    return baseBookingColumns.map((col) => {
      if (col.id === 'actions' || col.accessorKey === 'actions') {
        return {
          ...col,
          cell: (info) => {
            const booking = info.row.original;
            return (
              <div className="flex gap-2 justify-center">
                {booking.status === 'Ongoing' && (
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 extension"
                    onClick={() => handleExtendClick(booking)}
                  >
                    Extend
                  </button>
                )}
                {booking.status === 'Approved' && (
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cancel"
                    onClick={() => handleCancelClick(booking)}
                  >
                    Cancel
                  </button>
                )}
                {booking.status === 'Pending' && (
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 edit"
                    onClick={() => handleEditClick(booking)}
                  >
                    Edit
                  </button>
                )}
              </div>
            );
          },
        };
      }
      return col;
    });
  }, [baseBookingColumns]);

  // Inject Pay Now into settlements columns
  const settlementColumns = useMemo(() => {
    return baseSettlementColumns.map((col) => {
      if (col.id === 'actions' || col.accessorKey === 'actions') {
        return {
          ...col,
          cell: (info) => {
            const row = info.row.original;
            return row.status === 'Unpaid' ? (
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 Pay-Now"
                onClick={() => handlePayNowClick(row)}
              >
                Pay Now
              </button>
            ) : null;
          },
        };
      }
      return col;
    });
  }, [baseSettlementColumns]);

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
            <span className="flex items-center gap-2">
              <HiBookOpen /> My Bookings
            </span>
          </button>
          <button
            className={getButtonClass('settlements')}
            onClick={() => setActiveTab('settlements')}
          >
            <span className="flex items-center gap-2">
              <HiCreditCard /> Settlements
            </span>
          </button>
        </div>

        {/* Bookings Table */}
        {activeTab === 'bookings' && (
          <div className="p-4 overflow-x-auto">
            <div className="schedule-header">
              <h1 className="font-pathway text-2xl header-req">
                <HiBookOpen /> <span>My Bookings</span>
              </h1>
              <SearchBar
                placeholder="Search by car, location, or status..."
                value={searchTermBookings}
                onChange={setSearchTermBookings}
              />
            </div>

            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden mt-4">
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
        )}

        {/* Settlements Table */}
        {activeTab === 'settlements' && (
          <div className="p-4 overflow-x-auto">
            <div className="schedule-header">
              <h1 className="font-pathway text-2xl header-req">
                <HiCreditCard /> <span>Settlements</span>
              </h1>
              <SearchBar
                placeholder="Search by description..."
                value={searchTermSettlements}
                onChange={setSearchTermSettlements}
              />
            </div>

            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden mt-4">
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
        )}

        {/* Modals */}
        <ExtendModal
          show={showExtendModal}
          booking={selectedBooking}
          onClose={() => setShowExtendModal(false)}
          onConfirm={handleExtendConfirm}
        />
        <CancelModal
          show={showCancelModal}
          booking={selectedBooking}
          onClose={() => setShowCancelModal(false)}
          onConfirm={handleCancelConfirm}
        />
        <EditModal
          show={showEditModal}
          booking={selectedBooking}
          cars={[]} // pass your cars list if needed
          onClose={() => setShowEditModal(false)}
          onConfirm={handleEditConfirm}
        />
        <PayNowModal
          show={showPaymentModal}
          settlement={selectedPayment}
          onClose={() => setShowPaymentModal(false)}
          onConfirm={handlePaymentConfirm}
        />
      </div>
    </>
  );
}
