import AdminTable from "@/app/_components/AdminTable";
import SearchHawkvisi from "@/app/_components/SearchHawkvisi";
import TableContexts from "@/app/_components/TableContexts";
import { getAdmins } from "@/app/_lib/data-service";
import Link from "next/link";

async function page({ searchParams }: any) {
  const query = searchParams?.query ?? "";
  const admins = await getAdmins(query);
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="my-5">
          <h3 className="font-semibold text-2xl">System Admins</h3>
        </div>
      </div>

      <SearchHawkvisi />

      <TableContexts>
        <AdminTable admins={admins} searchParams={searchParams} />
      </TableContexts>

      <div>
        <Link
          href="admins/add"
          className="bg-primary-600 py-3 px-4 font-semibold hover:bg-primary-700 duration-200 transition-all ease-in-out rounded-md text-sm text-white"
        >
          Add new
        </Link>
      </div>
    </div>
  );
}

export default page;
