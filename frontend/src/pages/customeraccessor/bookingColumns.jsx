import { createColumnHelper } from '@tanstack/react-table';

const c = createColumnHelper();

export const bookingColumns = [
  c.accessor('bookingDate', { header: 'Booking Date' }),
  c.accessor('startDate', { header: 'Start Date' }),
  c.accessor('pickupTime', { header: 'Pick Up Time' }),
  c.accessor('pickupLocation', { header: 'Pick Up Location' }),
  c.accessor('endDate', { header: 'End Date' }),
  c.accessor('dropoffTime', { header: 'Drop Off Time' }),
  c.accessor('dropoffLocation', { header: 'Drop Off Location' }),
  c.accessor('carModel', { header: 'Car Model' }),
  c.accessor('status', { header: 'Status' }),
  c.accessor('actions', {
    header: 'Actions',
    cell: (info) => {
      const booking = info.row.original;
      if (booking.status === 'Ongoing') {
        return (
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 extension">
            Extend
          </button>
        );
      }
      if (booking.status === 'Approved') {
        return (
          <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cancel">
            Cancel
          </button>
        );
      }
      if (booking.status === 'Pending') {
        return (
          <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 edit">
            Edit
          </button>
        );
      }
      return null;
    },
  }),
];
