import ProductTable from "@/app/_components/ProductTable";
import SearchHawkvisi from "@/app/_components/SearchHawkvisi";
import SortBy from "@/app/_components/SortBy";
import TableContexts from "@/app/_components/TableContexts";
import { getProducts } from "@/app/_lib/data-service";
import Link from "next/link";

async function page({ searchParams }: any) {
  const query = searchParams?.query ?? "";
  const products = await getProducts(query);

  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
        <div className="my-5">
          <h3 className="font-semibold text-2xl">All Products</h3>
        </div>

        <div className="flex lg:flex-row flex-col gap-5 text-gray-600 text-sm lg:items-center">
          <SortBy
            options={[
              { value: "price-asc", label: "Price(low first)" },
              { value: "price-desc", label: "Price(high first)" },
              { value: "stock-asc", label: "Stock(low first)" },
              { value: "stock-desc", label: "Stock(high first)" }
            ]}
          />
        </div>
      </div>

      <SearchHawkvisi />

      <TableContexts>
        <ProductTable searchParams={searchParams} products={products} />
      </TableContexts>

      <div>
        <Link
          href="products/add"
          className="bg-primary-600 py-3 px-4 font-semibold hover:bg-primary-700 duration-200 transition-all ease-in-out rounded-md text-sm text-white"
        >
          Add product
        </Link>
      </div>
    </div>
  );
}

export default page;
