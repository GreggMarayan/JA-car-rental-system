// src/customeraccessor/bookingHistoryColumns.jsx
import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import '../../styles/customercss/customer-body.css';

export const bookingHistoryColumns = [
  {
    header: 'Booking Date',
    accessorKey: 'bookingDate',
  },
  {
    header: 'Car',
    cell: (info) => {
      const row = info.row.original;
      return (
        <div className="flex items-center justify-center gap-2 booking-history-table">
          {row.carImage ? (
            <img src={row.carImage} alt={row.carModel} className="booking-history-car-image" />
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
    cell: (info) => <span className="font-semibold text-green-600">₱{info.getValue()}</span>,
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
