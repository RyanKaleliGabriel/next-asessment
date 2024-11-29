export interface Manufacturer {
  id: number;
  name: string;
  image_url: string;
  active: boolean;
  created_at: Date;
  _count: {
    products: number;
  };
}

export interface Man{
  id: number;
  name: string;
  image_url: string;
  active: boolean;
  created_at: Date;
}

export interface UpdateManufacturerProps {
  manufacturer: Man;
}

export interface FilterByManufacturerProps {
  manufacturers: Manufacturer[];
}

export interface ManufacturerTableProps {
  searchParams: any;
  manufacturers: Manufacturer[];
}



export interface ManufacturerParams {
  name: string;
}
