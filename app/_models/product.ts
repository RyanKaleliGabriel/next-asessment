import { TechnicalDescription } from "@prisma/client";
import { ReactNode } from "react";
import { Cat, Category } from "./category";
import { Division } from "./division";
import { Manufacturer } from "./manufacturer";

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
// export interface Prod {
//   id: number;
//   name: string;
//   serialNumber: string;
//   cDescription: string;
//   price: number;
//   discount: number;
//   image_url: string;
//   display: string;
//   divisionId: number;
//   categoryId: number;
//   manufacturerId: number;
//   active: boolean;
//   created_at: Date;
// }

export interface ProductFormProps {
  divisions: Division[];
  manufacturers: Manufacturer[];
  categories: Cat[];
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

// export interface ProductArray {
//   products: Prod[];
// }
// export interface RelatedProductProps {
//   product: Prod;
// }

export interface ProductParams {
  cDescription: string;
  name: string;
  serialNumber: string;
  categoryId: number;
  manufacturerId: number;
  price: number;
  divisionId: number;
}
