import { Product } from "../_models/product";
import { Shop } from "../_models/shop";

const BASE_URL = process.env.BASE_URL;

export async function getProducts(query: string) {
  try {
    const response = await fetch(`${BASE_URL}/products?name=${query}`, {
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

export async function getShops(query: string ) {
  try {
    const response = await fetch(`${BASE_URL}/shops/?name=${query}`, {
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

export async function getShopStock() {
  try {
    const query = "";
    const products = await getProducts(query);
    const shops = await getShops(query);

    //Group products by stock
    const grouped = products.reduce((acc: any, product: Product) => {
      if (!acc[product.shop_id]) {
        acc[product.shop_id] = { totalStock: 0, shopId: product.shop_id };
      }

      acc[product.shop_id].totalStock += product.stock_level;
      return acc;
    }, {});

    //Map stock data to include shop names
    const shopStockData = Object.values(grouped).map((stock: any) => {
      const shop = shops.find((s: Shop) => s.id === stock.shopId);
      return {
        shopName: shop?.name || "Unknown shop",
        totalStock: stock.totalStock,
      };
    });

    const sortedShops = shopStockData.sort(
      (a, b) => b.totalStock - a.totalStock
    );

    const top5shops = sortedShops.slice(0,5);
    return top5shops;
  } catch (error: any) {
    console.error("Failed to fetch shop stock");
    throw error;
  }
}
