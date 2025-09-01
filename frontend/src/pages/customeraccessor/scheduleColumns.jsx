import React from 'react';

export const scheduleColumns = [
  { header: 'Start Date', accessorKey: 'startDate' },
  { header: 'PickUp Time', accessorKey: 'pickupTime' },
  { header: 'PickUp Location', accessorKey: 'pickupLocation' },
  { header: 'End Date', accessorKey: 'endDate' },
  { header: 'Drop-Off Time', accessorKey: 'dropoffTime' },
  { header: 'Drop-Off Location', accessorKey: 'dropoffLocation' },
  {
    header: 'Car Model',
    cell: (info) => {
      const row = info.row.original;
      return (
        <div className="flex items-center justify-center gap-2 schedule-car">
          {row.carImage ? (
            <img src={row.carImage} alt={row.carModel} className="car-image" />
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
];
