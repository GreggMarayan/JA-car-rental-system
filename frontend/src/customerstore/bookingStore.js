import { create } from 'zustand';

export const useBookingStore = create((set) => ({
  bookings: [
    {
      id: 1,
      bookingDate: '2025-09-01',
      startDate: '2025-09-05',
      pickupTime: '09:00 AM',
      pickupLocation: 'Manila',
      endDate: '2025-09-07',
      dropoffTime: '05:00 PM',
      dropoffLocation: 'Quezon City',
      carModel: 'Toyota Vios',
      status: 'Ongoing',
    },
    {
      id: 2,
      bookingDate: '2025-08-15',
      startDate: '2025-08-20',
      pickupTime: '08:00 AM',
      pickupLocation: 'Makati',
      endDate: '2025-08-22',
      dropoffTime: '06:00 PM',
      dropoffLocation: 'Pasig',
      carModel: 'Honda Civic',
      status: 'Approved',
    },
    {
      id: 3,
      bookingDate: '2025-07-10',
      startDate: '2025-07-15',
      pickupTime: '10:00 AM',
      pickupLocation: 'Taguig',
      endDate: '2025-07-17',
      dropoffTime: '04:00 PM',
      dropoffLocation: 'Mandaluyong',
      carModel: 'Nissan Altima',
      status: 'Pending',
    },
  ],
  setBookings: (rows) => set({ bookings: rows }),
}));
