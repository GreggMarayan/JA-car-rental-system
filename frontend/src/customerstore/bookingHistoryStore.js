// src/customerstore/bookingHistoryStore.js
import { create } from 'zustand';

export const useBookingHistoryStore = create((set) => ({
  bookings: [
    {
      id: 1,
      customerId: 1,
      bookingDate: '2025-08-01',
      carModel: 'Nissan Navarra 2017',
      carImage: 'Navarra.png',
      type: 'Pick-Up',
      startDate: '2025-09-05',
      endDate: '2025-09-06',
      amount: 3000,
      status: 'Completed',
    },
    {
      id: 2,
      customerId: 1,
      bookingDate: '2025-08-05',
      carModel: 'Nissan Terra 2019',
      carImage: 'terra.png',
      type: 'SUV',
      startDate: '2025-09-10',
      endDate: '2025-09-12',
      amount: 3500,
      status: 'Cancelled',
    },
    {
      id: 3,
      customerId: 1,
      bookingDate: '2025-08-07',
      carModel: 'Toyota Hilux 2019',
      carImage: 'hilux.png',
      type: 'Pick-Up',
      startDate: '2025-09-07',
      endDate: '2025-09-08',
      amount: 3000,
      status: 'Pending',
    },
  ],
  setBookings: (data) => set({ bookings: data }),
}));
