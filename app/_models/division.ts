import { Cat, Category } from "./category";

export interface Division {
  id: number;
  name: string;
  categoryId: number;
  created_at: Date;
  active: boolean;
  _count: {
    products: number;
  };
  category: {
    name: string;
  };
}

export interface Div{
  id: number;
  name: string;
  categoryId: number;
  created_at: Date;
  active: boolean;
}

export interface UpdateDivisionProps {
  categories: Cat[];
  division: Div;
}



interface UpdateDivisionParams {
  divisionId: string;
}

export interface UpdateDivisionPageProps {
  params: UpdateDivisionParams;
}

export interface DivisionFormProps {
  categories: Cat[];
}

export interface DivisionTableProps {
  searchParams: any;
  divisions: Division[];
}

export interface DivisionArray {
  divisions: Div[];
}

export interface DivisionParams {
  name: string;
  categoryId: number;
}

interface DivisionFilterForm {
  id: number;
  name: string;
  categoryId: number;
  created_at: Date;
  active: boolean;
  _count: {
    products: number;
  };
}

export interface DivisionFilterFormProps {
  divisions: DivisionFilterForm[];
}
