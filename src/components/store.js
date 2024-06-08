import axios from 'axios'
import { create } from 'zustand'

export const useStore = create((set) => ({
  dateTo: null,
  dayCounter: null,
  frequency: null,
  curve: null,
  currency: null,
  dateType: null,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  loadFrequencies: async (state) => {
    try {
        const response = await axios.get('http://172.22.130.217:7770/symphony/frequencies');
        state.frequency = response.body;
        console.log(response)
    } catch (e) {
        console.log(e)
    }
  },
  loadDayCounter: async (state) => {
    try {
        const response = await axios.get('http://172.22.130.217:7770/symphony/daycounters');
        state.dayCounter = response.body;
    } catch (e) {
        console.log(e);
    }
  },
  loadDateToType: async (state) => {
    try {
        const response = await axios.get('http://172.22.130.217:7770/symphony/datetotype');
        state.dayType = response.body;
    } catch (e) {
        console.log(e)
    }
  },
  loadCurrency: async (state) => {
    try {
        const response = await axios.get('http://172.22.130.217:7770/symphony/currencies');
        state.currency = response.body;
    } catch (e) {
        console.log(e)
    }
  }
}))