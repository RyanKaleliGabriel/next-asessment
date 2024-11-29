
import { Product } from "../_models/product";
import { Shop } from "../_models/shop";

const BASE_URL = process.env.BASE_URL;

export async function getProducts(query: string) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();
    return products;
  } catch (error: any) {
    console.error("Failed to fetch products", error);
    throw error;
  }
}

export async function getProduct(productId: number): Promise<Product | null> {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const product = await response.json();
    return product;
  } catch (error: any) {
    console.error("Failed to fetch product", error);
    return null;
  }
}

export async function getShops(query: string) {
  try {
    const response = await fetch(`${BASE_URL}/shops`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch shops");
    }

    const shops = await response.json();
    return shops;
  } catch (error: any) {
    console.error("Failed to fetch shops", error);
    throw error;
  }
}

export async function getShop(shopId: number): Promise<Shop | null> {
  try {
    const response = await fetch(`${BASE_URL}/shops/${shopId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch shop.");
    }

    const shop = await response.json();
    return shop;
  } catch (error: any) {
    console.error("Failed to fetch shop");
    throw error;
  }
}
