import { persist } from 'zustand/middleware';
import { create } from 'zustand';

const useTransaction = create(
  persist(
    (set) => ({
      data: {
        from:3,
        to:4,
      },
      updateData: (payload) => set((state) => ({ data: { ...state.data, ...payload } })),
    }),
    { name: 'transaction', version: 8 }
  )
);

export default useTransaction;

