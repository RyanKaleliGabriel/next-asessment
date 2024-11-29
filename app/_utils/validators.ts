import { Admin, AdminParams } from "../_models/admin";
import { BranchParams } from "../_models/branch";
import { CategoryParams } from "../_models/category";
import { DivisionParams } from "../_models/division";
import { ManufacturerParams } from "../_models/manufacturer";
import { Product, ProductParams } from "../_models/product";
import { Shop, ShopValidation } from "../_models/shop";

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

export function validateShop(
  shop: ShopValidation,
  file: File
) {
  const errors: string[] = [];
  if (file.name === "undefined") errors.push("Logo input missing");
  if (shop.name === "") errors.push("Shop name is missing");
  if (shop.description === "") errors.push("Shop description is missing");
  return errors;
}

export function validateUpdateManufacturer(manufacturer: ManufacturerParams) {
  const errors: string[] = [];
  if (manufacturer.name === "") errors.push("Name input missing");
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

export function validateProduct(product: ProductParams, file: File) {
  const errors: string[] = [];
  if (file.name === "undefined") errors.push("Image file input missing");
  if (product.cDescription.length > 1000 || product.cDescription.length < 85)
    errors.push("Customer description should have 100-1000 characters");
  if (product.name === "") errors.push("Name input is missing");
  if (product.serialNumber === "")
    errors.push("Product serial number is missing");
  if (product.cDescription === "")
    errors.push("Customer description input is missing");
  if (product.categoryId === null) errors.push("Category input is missing");
  if (product.manufacturerId === null)
    errors.push("Manufacturer input is missing");
  if (product.price === null) errors.push("Price input is missing");
  if (product.divisionId === null)
    errors.push("Product division input missing");
  return errors;
}

export function validateUpdateProduct(product: ProductParams) {
  const errors: string[] = [];
  if (product.name === "") errors.push("Name input is missing");
  if (product.cDescription.length > 1000 || product.cDescription.length < 100)
    errors.push("Customer description should have 100-1000 characters");
  if (product.serialNumber === "")
    errors.push("Product serial number is missing");
  if (product.cDescription === "")
    errors.push("Customer description input is missing");
  if (product.categoryId === null) errors.push("Category input is missing");
  if (product.manufacturerId === null)
    errors.push("Manufacturer input is missing");
  if (product.price === null) errors.push("Price input is missing");
  if (product.divisionId === null)
    errors.push("Product division input missing");
  return errors;
}

export function validateTechnicalDescriptions(tDescriptions: string[]) {
  const errors: string[] = [];

  for (let i = 0; i < tDescriptions.length; i++) {
    if (tDescriptions[i] === "") {
      throw new Error(
        "Empty technical field. Delete the field or add a description"
      );
    }
  }

  if (tDescriptions.length === 0) {
    errors.push("Product has to have atleast one technical description");
    return errors;
  }

  for (let i = 0; i < tDescriptions.length; i++) {
    const descriptionA = tDescriptions[i].trim().toLowerCase();

    for (let j = i + 1; j < tDescriptions.length; j++) {
      const descriptionB = tDescriptions[j].trim().toLowerCase();
      if (descriptionA === descriptionB) {
        errors.push(`Dupliate technical descrption found: "${descriptionA}"`);
      }
    }
  }
  return errors;
}

export function validateAdmin(admin: AdminParams) {
  const errors: string[] = [];
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (admin.name === "") errors.push("Name input is missing");
  if (admin.email === "") errors.push("Email input is missing");
  if (admin.password === "") errors.push("Password input is missing");
  if (admin.password.length < 8)
    errors.push("Password should have more than 8 characters");
  if (!re.test(String(admin.email).toLowerCase()))
    errors.push("Invalid email address");

  return errors;
}

export function validateCredentials(admin: any) {
  const errors: string[] = [];
  if (admin.email === "") errors.push("Email input is missing");
  if (admin.password === "") errors.push("Password input is missing");
  return errors;
}

export function validateUserData(admin: any) {
  const errors: string[] = [];
  if (admin.name === "") errors.push("Username input is missing");
  return errors;
}

export function validatePasswords(
  newPassword: string,
  confirmPassword: string
) {
  const errors: string[] = [];
  if (newPassword !== confirmPassword) {
    errors.push("Password do no match");
  }
  if (newPassword.length < 8) {
    errors.push("Password should have more than 8 characters");
  }
  return errors;
}
