import NoData from "@/app/_components/NoData";
import UpdateProductForm from "@/app/_components/UpdateProductForm";
import { getProduct } from "@/app/_lib/data-service";

interface Params {
  productId: number;
  name: string;
}

interface PageProps {
  params: Params;
}

async function generateMetaData({ params }: PageProps) {
  const product = await getProduct(params.productId);
  if(!product){
    return { title: "Product not found" };
  }
  return {
    title: `Update Product ${product.name}`,
  };
}

async function page({ params }: PageProps) {
  const product = await getProduct(params.productId);
  if (!product) {
    return <NoData>Product not found</NoData>;
  }

  return (
    <div className="bg-white py-4 px-6 shadow-sm rounded-md">
      <div>
        <h3 className="text-2xl text-primary-600 font-bold">{product.name}</h3>
      </div>
      <UpdateProductForm product={product}/>
    </div>
  );
}

export default page;
