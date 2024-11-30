import ProductForm from "@/app/_components/ProductForm";
import { getProducts, getShops } from "@/app/_lib/data-service";

async function page() {
  const query =""
  const shops = await getShops(query);
  return (
    <div className="bg-white py-4 px-6 shadow-sm rounded-md">
      <div>
        <h3 className="text-2xl text-primary-600 font-bold">Add new Product</h3>
      </div>
      <ProductForm shops={shops} />
    </div>
  );
}

export default page;
