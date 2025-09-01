import { create } from 'zustand';

export const useScheduleStore = create((set) => ({
  reservations: [
    {
      id: 1,
      customerId: 1,
      startDate: '2025-09-05',
      pickupTime: '09:00 AM',
      pickupLocation: 'Libertad',
      endDate: '2025-09-06',
      dropoffTime: '05:00 PM',
      dropoffLocation: 'Libertad',
      carModel: 'Nissan Navarra 2017',
      carImage: 'Navarra.png',
    },
    {
      id: 2,
      customerId: 1,
      startDate: '2025-09-10',
      pickupTime: '10:00 AM',
      pickupLocation: 'Plaza',
      endDate: '2025-09-12',
      dropoffTime: '04:00 PM',
      dropoffLocation: 'Plaza',
      carModel: 'Nissan Terra 2019',
      carImage: 'terra.png',
    },
    {
      id: 3,
      customerId: 1,
      startDate: '2025-09-07',
      pickupTime: '08:00 AM',
      pickupLocation: 'FSUU',
      endDate: '2025-09-08',
      dropoffTime: '06:00 PM',
      dropoffLocation: 'FSUU',
      carModel: 'Toyota Hilux 2019',
      carImage: 'hilux.png',
    },
  ],
  setReservations: (data) => set({ reservations: data }),
}));
