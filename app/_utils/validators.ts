import { Prod } from "../_models/product";
import { ShopUpdateProps, ShopValidation } from "../_models/shop";



export function validateShop(shop: ShopValidation, file: File) {
  const errors: string[] = [];
  if (file.name === "undefined") errors.push("Logo input missing");
  if (shop.name === "") errors.push("Shop name is missing");
  if (shop.description === "") errors.push("Shop description is missing");
  return errors;
}

export function validateUpdateShop(shop: ShopUpdateProps) {
  const errors: string[] = [];
  if (shop.name === "") errors.push("Name is missing");
  if (shop.description === "") errors.push("Descriptionis missing");
  return errors;
}




export function validateProduct(product: Prod, file: File) {
  const errors: string[] = [];
  if (file.name === "undefined") errors.push("Image file input missing");
  if (product.name === "") errors.push("Name input is missing");
  if (product.shop_id === null)
    errors.push("Shop is missing");
  if (product.price === null) errors.push("Price input is missing");
  if (product.stock_level === null)
    errors.push("Product stock is missing");
  return errors;
}

export function validateUpdateProduct(product: Prod) {
  const errors: string[] = [];
  if (product.name === "") errors.push("Name input is missing");
  if (product.shop_id === null)
    errors.push("Shop is missing");
  if (product.price === null) errors.push("Price input is missing");
  if (product.stock_level === null)
    errors.push("Product stock is missing");
  return errors;
}

