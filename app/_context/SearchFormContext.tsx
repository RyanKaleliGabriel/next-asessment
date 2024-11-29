"use client"
import { ReactNode, createContext, useContext, useState } from "react";

interface SearchProviderProps {
  children: ReactNode;
}

const SearchFormContext = createContext<
  | {
      isFormOpen: boolean;
      setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function SearchFormProvider({ children }: SearchProviderProps) {
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <SearchFormContext.Provider value={{ isFormOpen, setFormOpen }}>
      {children}
    </SearchFormContext.Provider>
  );
}

function useSearchForm() {
  const context = useContext(SearchFormContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { SearchFormProvider, useSearchForm };
