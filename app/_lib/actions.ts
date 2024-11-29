"use server";

import { revalidatePath } from "next/cache";
import { upload } from "../_utils/upload";
import {
  validateProduct,
  validateShop,
  validateUpdateProduct,
  validateUpdateShop
} from "../_utils/validators";



const BASE_URL = process.env.BASE_URL;



export async function createShop(formData: any): Promise<void> {
  try {
    const file: File | null = formData.get("photo") as unknown as File;
    const newShop = {
      name: String(formData.get("name")),
      description: String(formData.get("description")),
      logo: file.name,
    };
    //Error Handling
    const errorMessages: string[] = validateShop(newShop, file);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    //Upload Image
    await upload(file, "shop");

    const response = await fetch(`${BASE_URL}/shops`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShop),
    });

    if (!response.ok) {
      throw new Error("Failed to create shop.");
    }

    const shop = await response.json();
    return shop;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/shops");
  }
}

export async function deleteShop(shopId: number) {
  try {
    const response = await fetch(`${BASE_URL}/shops/${shopId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete shop");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/shops");
  }
}



export async function updateShop(formData: any): Promise<void> {
  try {
    // Variable Declarations
    const file: File | null = formData.get("logo") as unknown as File;
    const id = formData.get("id");

    if (file.name === "undefined") {
      const newShop = {
        name: String(formData.get("name")),
        logo: String(formData.get("current_image")),
        description: String(formData.get("description")),
      };

      // Error Handling
      const errorMessages: string[] = validateUpdateShop(newShop);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      //DB ACTION
      const response = await fetch(`${BASE_URL}/shops/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShop),
      });

      if (!response.ok) {
        throw new Error("Failed to update shop.");
      }
      const shop = await response.json();

      return shop;

      //DB Action
    } else {
      const newShop = {
        name: String(formData.get("name")),
        description: String(formData.get("description")),
        logo: file ? file.name : "",
      };

      // Error Handling
      const errorMessages: string[] = validateShop(newShop, file);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      //Upload Image
      await upload(file, "shop");

      //DB ACTION
      const response = await fetch(`${BASE_URL}/shops/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShop),
      });

      if (!response.ok) {
        throw new Error("Failed to update shop.");
      }
      const shop = await response.json();

      return shop;
    }
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/shops");
  }
}

export async function createProduct(formData: any): Promise<void> {
  try {
    // Variable Declaration
    const file: File | null = formData.get("photo") as unknown as File;

    //DATA TO GO TO PRODUCT TABLE
    const newProduct = {
      name: String(formData.get("name")),
      price: Number(formData.get("price")),
      stock_level: Number(formData.get("stock_level")),
      photo: file ? file.name : "",
      shop_id: Number(formData.get("shop_id")),
    };

    console.log(newProduct);

    //Product Error Handling
    const errorMessages: string[] = validateProduct(newProduct, file);
    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join(". "));
    }

    // upload image
    await upload(file, "product");

    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("Failed to add a new product");
    }

    const product = await response.json();
    return product;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/products");
  }
}

export async function deleteProduct(productId: number) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete product");
    }

    const product = await response.json();
    return product;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/products");
  }
}

export async function UpdateProduct(formData: any): Promise<void> {
  try {
    const file: File | null = formData.get("photo") as unknown as File;
    const id = formData.get("id");
    if (file.name === "undefined") {
      const newProduct = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
        stock_level: Number(formData.get("stock_level")),
        photo: formData.get("current_image"),
      };

      // Error Handling
      const errorMessages: string[] = validateUpdateProduct(newProduct);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const product = await response.json();
      return product;
    } else {
      const newProduct = {
        name: String(formData.get("name")),
        price: Number(formData.get("price")),
        stock_level: Number(formData.get("discount")),
        photo: file ? file.name : "",
        shop_id: Number(formData.get("shop_id")),
      };

      const errorMessages: string[] = validateProduct(newProduct, file);
      if (errorMessages.length > 0) {
        throw new Error(errorMessages.join(". "));
      }

      //IMAGE UPLOAD
      await upload(file, "product");

      const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const product = await response.json();
      return product;
    }
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    revalidatePath("/products");
  }
}

