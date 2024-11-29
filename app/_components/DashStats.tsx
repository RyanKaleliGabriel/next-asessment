import {
  HomeModernIcon,
  MapPinIcon,
  Square3Stack3DIcon,
  WalletIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/solid";
import { getProducts, getShops } from "../_lib/data-service";
import { Product } from "../_models/product";

async function DashStats() {
  let query = "";
  const products = await getProducts(query);
  const shops = await getShops(query);
  const productValue = products.reduce(
    (accumulator: number, product: Product) => {
      return (accumulator += product.price);
    },
    0
  );
  const stockLevel = products.reduce(
    (accumulator: number, product: Product) => {
      return accumulator + product.stock_level;
    },
    0
  );
  return (
    <div className="flex lg:flex-row gap-2 flex-col justify-between mb-8">
      <div className="bg-white flex items-center gap-2 shadow-lg py-8 px-12 rounded-md">
        <Square3Stack3DIcon className="w-12 h-12 rounded-full text-primary-400 bg-primary-600 p-2" />
        <div>
          <h3 className="font-semibold">{products.length}</h3>
          <p className="text-gray-500 text-sm">No. Products</p>
        </div>
      </div>

      <div className="bg-white flex items-center gap-2 shadow-lg py-8 px-12 rounded-md">
        <HomeModernIcon className="w-12 h-12 rounded-full text-yellow-400 bg-yellow-600 p-2" />
        <div>
          <h3 className="font-semibold">{shops.length}</h3>
          <p className="text-gray-500 text-sm">No. Shops</p>
        </div>
      </div>

      <div className="bg-white flex items-center gap-2 shadow-lg py-8 px-12 rounded-md">
        <WalletIcon className="w-12 h-12 rounded-full text-blue-400 bg-blue-600 p-2" />
        <div>
          <h3 className="font-semibold">KES: {productValue}</h3>
          <p className="text-gray-500 text-sm">Value of Products</p>
        </div>
      </div>
      <div className="bg-white flex items-center gap-2 shadow-lg py-8 px-12 rounded-md">
        <ClipboardDocumentCheckIcon className="w-12 h-12 rounded-full text-green-400 bg-green-600 p-2" />
        <div>
          <h3 className="font-semibold">{stockLevel}</h3>
          <p className="text-gray-500 text-sm">Stock Level</p>
        </div>
      </div>
    </div>
  );
}

export default DashStats;
