import SearchHawkvisi from "@/app/_components/SearchHawkvisi";
import ShopTable from "@/app/_components/ShopTable";
import TableContexts from "@/app/_components/TableContexts";
import { getShops } from "@/app/_lib/data-service";
import Link from "next/link";

async function page({ searchParams }: any) {
  const query = searchParams?.query ?? "";
  const shops = await getShops(query);
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
        <div className="my-5">
          <h3 className="font-semibold text-2xl">All Shops</h3>
        </div>
      </div>

      <SearchHawkvisi />
      <TableContexts>
        <ShopTable searchParams={searchParams} shops={shops} />
      </TableContexts>

      <div>
        <Link
          href="shops/add"
          className="bg-primary-600 py-3 px-4 font-semibold hover:bg-primary-700 duration-200 transition-all ease-in-out rounded-md text-sm text-white"
        >
          Add New
        </Link>
      </div>
    </div>
  );
}

export default page;
