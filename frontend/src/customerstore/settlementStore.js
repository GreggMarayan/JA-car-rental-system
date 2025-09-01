import { create } from 'zustand';

export const useSettlementStore = create((set) => ({
  settlements: [
    {
      id: 1,
      bookingDate: '2025-09-01',
      description: 'Full payment for Toyota Vios rental',
      amount: 3500,
      status: 'Paid',
    },
    {
      id: 2,
      bookingDate: '2025-08-15',
      description: 'Partial payment for Honda Civic rental',
      amount: 2000,
      status: 'Unpaid',
    },
    {
      id: 3,
      bookingDate: '2025-07-10',
      description: 'Full payment for Nissan Altima rental',
      amount: 4000,
      status: 'Paid',
    },
  ],
  setSettlements: (rows) => set({ settlements: rows }),
}));
