export interface Category {
  id: number;
  name: string;
  display: string;
  _count: {
    products: number;
  };
  image_url: string;
  created_at: Date;
  active: boolean;
}
export interface Cat{
  id: number;
  name: string;
  display: string;
  created_at: Date;
  active: boolean;
}

export interface UpdateCategoryProps {
  category: Cat;
}

interface UpdateCategoryParams {
  id: string;
  categoryId: string;
}
export interface UpdateCategoryPageProps {
  params: UpdateCategoryParams;
}

export interface CategoryTableProps {
  searchParams: any;
  categories: Cat[];
}

export interface CategoryArrayProps {
  categories: Category[];
}

export interface CategoryParams {
  name: string;
  display: string;
}
