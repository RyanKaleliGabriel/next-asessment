
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


export interface SubmitButtonProps {
  children: ReactNode;
  pendingLabel: string | any;
  isSubmitting: boolean;
}


export interface credentialsType {
  email: string;
  password: string;
}

export interface PaginationProps {
  count: number;
}
