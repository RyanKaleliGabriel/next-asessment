import { getProducts } from "../_lib/data-service";
import { Product } from "../_models/product";
import StockChart from "./StockChart";

async function Charts() {
  const query = "";
  const products = await getProducts(query);
  const inStock = products.filter(
    (product: Product) => product.stock_level > 5
  ).length;
  const outStock = products.filter(
    (product: Product) => product.stock_level < 1
  ).length;
  const lowStock = products.filter(
    (product: Product) => product.stock_level < 5
  ).length;

  const data = [
    {
      name: "In Stock",
      quantity: inStock,
    },
    {
      name: "Out of Stock",
      quantity: outStock,
    },
    {
      name: "Low Stock",
      quantity: lowStock,
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-2">
      <StockChart data={data} />
    </div>
  );
}

export default Charts;
