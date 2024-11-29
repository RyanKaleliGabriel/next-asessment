import { Admin, AdminParams } from "../_models/admin";
import { BranchParams } from "../_models/branch";
import { CategoryParams } from "../_models/category";
import { DivisionParams } from "../_models/division";
import { ManufacturerParams } from "../_models/manufacturer";
import { Prod, Product, ProductParams } from "../_models/product";
import { Shop, ShopUpdateProps, ShopValidation } from "../_models/shop";

export function validateBranch(branch: BranchParams, file: File) {
  const errors: string[] = [];
  if (file.name === "undefined") errors.push("Image file input missing");
  if (branch.name === "") errors.push("Name input missing");
  if (branch.phone === "") errors.push("Phone Number input missing");
  if (branch.phone.length < 10) errors.push("Invalid phone number");
  if (branch.email === "") errors.push("Email input missing");
  if (branch.location === "") errors.push("Location input missing");
  if (branch.county === "") errors.push("County input missing");
  return errors;
}

export function validateUpdateBranch(branch: BranchParams) {
  const errors: string[] = [];
  if (branch.name === "") errors.push("Name input missing");
  if (branch.phone === "") errors.push("Phone Number input missing");
  if (branch.phone.length < 10) errors.push("Invalid phone number");
  if (branch.email === "") errors.push("Email input missing");
  if (branch.location === "") errors.push("Location input missing");
  if (branch.county === "") errors.push("County input missing");
  return errors;
}

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

export function validateDivision(division: DivisionParams) {
  const errors: string[] = [];
  if (division.name === "") errors.push("Name input missing");
  if (division.categoryId === null) errors.push("Category input is missing");
  return errors;
}

export function validateCategory(category: CategoryParams) {
  const errors: string[] = [];
  if (category.name === "") errors.push("Name input is missing");
  if (category.display === "") errors.push("Display input is missing");
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

