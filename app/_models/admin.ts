export interface Admin {
  id: number;
  name: string;
  email: string;
  password: string;
  image_url: string;
  active: boolean;
}

export interface AdminTableProps {
  admins: Admin[];
  searchParams: any;
}

export interface DeactivateFormProps {
  user: any;
}

export interface AdminParams {
  name: string;
  email: string;
  password: string;
}
