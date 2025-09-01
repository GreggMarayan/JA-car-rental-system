import { createColumnHelper } from '@tanstack/react-table';

const c = createColumnHelper();

export const settlementColumns = [
  c.accessor('bookingDate', { header: 'Booking Date' }),
  c.accessor('description', { header: 'Description' }),
  c.accessor('amount', {
    header: 'Amount',
    cell: (info) => <span className="font-semibold text-green-600">₱{info.getValue()}</span>,
  }),
  c.accessor('status', {
    header: 'Status',
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
  }),
  c.accessor('actions', {
    header: 'Actions',
    cell: (info) => {
      const row = info.row.original;
      return row.status === 'Unpaid' ? (
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 Pay-Now">
          Pay Now
        </button>
      ) : null;
    },
  }),
];
