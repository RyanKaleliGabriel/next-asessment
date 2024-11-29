"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getComparisonProducts } from "../_lib/data-service";

const ProductComparisonContext = createContext<
  | {
      products: any;
      setProducts: React.Dispatch<React.SetStateAction<any>>;
    }
  | undefined
>(undefined);

function ProductComparisonProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState([]);


  return (
    <ProductComparisonContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductComparisonContext.Provider>
  );
}

function useProductComparison() {
  const context = useContext(ProductComparisonContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { useProductComparison, ProductComparisonProvider };
