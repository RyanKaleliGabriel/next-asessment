import { ReactNode } from "react";


export interface Product {
  id: number;
  name: string;
  stock_level: number;
  price: number;
  photo: string;
  shop_id: number;
}

export interface Prod {
  name?: string;
  stock_level?: number;
  price?: number;
  photo?: string;
  shop_id?: number;
}

export interface UpdateProductProps {
  product: Product;
}

export interface ButtonFilterProduct {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: ReactNode;
}

export interface ProductTableProps {
  searchParams: any;
  products: Product[];
}
export interface ProductArray2 {
  products: Product[];
}

