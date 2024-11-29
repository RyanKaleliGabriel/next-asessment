import { Product } from "@prisma/client";
import { Manufacturer } from "./manufacturer";
import { Branch } from "./branch";
import { ReactNode } from "react";

export interface NoDataDropDownProps {
  href: string;
  model: string;
}

interface SortOption {
  value: string;
  label: string;
}

export interface SortOptionsProps {
  options: SortOption[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: any;
}

export interface DashStatsProps {
  products: Product[];
  manufacturers: Manufacturer[];
  branches: Branch[];
}

export interface DashProductsLatestProps {
  products: Product[];
}

export interface SubmitButtonProps {
  children: ReactNode;
  pendingLabel: string | any;
  isSubmitting: boolean;
}

export interface SocialCredentialsType {
  auth_code: string;
}

export interface credentialsType {
  email: string;
  password: string;
}

export interface PaginationProps {
  count: number;
}
