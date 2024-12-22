"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const initialstate = { from: undefined, to: undefined };
  const [range, setRange] = useState(initialstate);

  const resetRange = () => setRange(initialstate);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw Error("Context was used outside the Provider");

  return context;
}

export { ReservationProvider, useReservation };
