import axios from 'axios'
import { create } from 'zustand'

export const useStore = create((set) => ({
  dateTo: [''],
  dayCounter: [''],
  frequency: [''],
  curve: [''],
  currency: [''],
  dateType: [''],
  instrumentSearch: null,
  instrument: null,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  loadFrequencies: async () => {
        const response = await axios.get('http://172.22.130.217:7770/symphony/frequencies');
        set({frequency: response.data});
  },
  loadDayCounter: async () => {
        const response = await axios.get('http://172.22.130.217:7770/symphony/daycounters');
        set({dayCounter: response.data});
  },
  loadDateToType: async () => {
        const response = await axios.get('http://172.22.130.217:7770/symphony/datetotype');
        set({dateTo: response.data});
  },
  loadCurrency: async () => {
        const response = await axios.get('http://172.22.130.217:7770/symphony/currencies');
        set({currency: response.data});
  },
  loadInstrumentSearch: async (value) =>
  {
        const response = await axios.get('http://172.22.130.217:7770/symphony/instrument/search', {
            params: {
                sample: value,//options.sample,
                quantity: 10//options.quantity
            }
        });
        set({instrumentSearch: response.data});
  },
  loadInstrument: async (value) => {
    const response = await axios.get(`http://172.22.130.217:7770/symphony/instrument/${value}`);
    set({instrument: response.data});
  }
}))