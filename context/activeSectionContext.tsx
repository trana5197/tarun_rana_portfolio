"use client";

import { createContext, useContext, useState } from "react";

import type { SectionName } from "./../lib/types";

interface ActiveContextProviderProps {
  children: React.ReactNode;
}

export interface ActiveSectionContextType {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

function ActiveSectionContextProvider({
  children,
}: ActiveContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveContext() {
  const context = useContext(ActiveSectionContext);

  if (context === undefined || context === null)
    throw new Error(
      "ActiveSectionContext is defined outside ActiveSectionContextProvider",
    );

  return context;
}

export { ActiveSectionContextProvider, useActiveContext };
