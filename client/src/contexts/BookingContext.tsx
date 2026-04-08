/**
 * FEC Playbook — Booking Context
 * Global state for the booking calendar modal.
 * Wrap the app in <BookingProvider> and call openBooking() from any component.
 */

import { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  isOpen: false,
  openBooking: () => {},
  closeBooking: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openBooking: () => setIsOpen(true),
        closeBooking: () => setIsOpen(false),
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
