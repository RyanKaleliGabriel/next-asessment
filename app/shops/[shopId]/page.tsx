import NoData from "@/app/_components/NoData";
import UpdateShopForm from "@/app/_components/UpdateShopForm";
import UpdateManufacturerForm from "@/app/_components/UpdateShopForm";
import { getShop } from "@/app/_lib/data-service";

interface Params {
  shopId: number;
  name: string;
}

interface PageProps {
  params: Params;
}

async function generateMetaData({ params }: PageProps) {
  const shop = await getShop(params.shopId);
  if (!shop) {
    return { title: `Shop not found` };
  }
  return { title: `Update Shop ${shop.name}` };
}

async function page({ params }: PageProps) {
  console.log(params)
  const shop= await getShop(params.shopId);
  if (!shop) {
    return <NoData>Shop Not found</NoData>;
  }
  return (
    <div className="bg-white py-4 px-6 shadow-sm rounded-md">
      <div>
        <h3 className="text-2xl text-primary-600 font-bold">
          {shop.name}
        </h3>
      </div>
      <UpdateShopForm shop={shop} />
    </div>
  );
}

export default page;
