import { create } from "zustand";

interface BookingState {
  service: string;
  name: string;
  phone: string;
  from: string;
  to: string;
  notes: string;

  setService: (value: string) => void;
  setName: (value: string) => void;
  setPhone: (value: string) => void;
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
  setNotes: (value: string) => void;

  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  service: "",
  name: "",
  phone: "",
  from: "",
  to: "",
  notes: "",

  setService: (value) => set({ service: value }),
  setName: (value) => set({ name: value }),
  setPhone: (value) => set({ phone: value }),
  setFrom: (value) => set({ from: value }),
  setTo: (value) => set({ to: value }),
  setNotes: (value) => set({ notes: value }),

  reset: () =>
    set({
      service: "",
      name: "",
      phone: "",
      from: "",
      to: "",
      notes: "",
    }),
}));