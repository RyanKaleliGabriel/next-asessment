export interface Branch {
  id: number;
  name: string;
  email: string;
  phone: string;
  image_url: string;
  location: string;
  active: boolean;
  county: string;
  created_at: Date;
}

export interface BranchesTableProps {
  branches: Branch[];
  searchParams: any;
}

export interface UpdateBranchProps {
  branch: Branch;
}

export interface BranchParams {
  name: string;
  email: string;
  phone: string;
  image_url: string;
  location: string;
  county: string;
}
