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


export const useDataStore =create((set)=>({
    data:{},
    editMode:{status:false, fieldName:''},
    bank:{},
    updateData: (payload) => set((state) => ({ data: {...state.data,...payload } })),
    setEditMode:(payload) => set((state) => ({ editMode: payload })),
    setBank:(payload) => set((state) => ({ bank: payload })),
}   
))

export const useInvestmentStore=create((set)=>({

  data:{
    wallet_balance:100000,
    selectedInvestment:{},
    paymentMethod:'',
    paymentAmount:null,
    noOfShares:null,
  },
  setSelectedInvestment: (payload) => set((state) => ({ data: {...state.data,selectedInvestment: payload  } })),
  setWalletBanace: (payload) => set((state) => ({ data: {...state.data,wallet_balance: payload  } })),
  setPaymentMethod: (payload) => set((state) => ({ data: {...state.data,paymentMethod: payload  } })),
  setPaymentAmount: (payload) => set((state) => ({ data: {...state.data,paymentAmount: payload  } })),
  setNoOfShares: (payload) => set((state) => ({ data: {...state.data,noOfShares: payload  } })),
}))



export default useTransaction;

