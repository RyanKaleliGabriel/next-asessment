export interface Shop {
  id: number;
  name: string;
  description: string;
  logo: string;
}

export interface ShopValidation{
  name: string;
  description: string;
  logo: string;
}

export interface ShopsProps {
  shops: Shop[];
  searchParams: string;
}

export interface UpdateShopProps{
  shop:Shop
}