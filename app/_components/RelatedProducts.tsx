import Image from "next/image";
import Link from "next/link";
import { getProductsOnDivision } from "../_lib/data-service";
import { RelatedProductProps } from "../_models/product";
import { ProductName, ProductSerialNo } from "../_utils/Product";

async function RelatedProducts({ product }: RelatedProductProps) {
  const products = await getProductsOnDivision(product.divisionId, product.id);

  const relatedProducts = products.slice(0, 4);
  if (!relatedProducts || relatedProducts.length < 1) return null;

  return (
    <div className="px-6 my-10">
      <h3 className="font-semibold  text-2xl">
        You might also want to look at
      </h3>
      <div className="flex flex-1 gap-3 flex-wrap justify-center">
        {relatedProducts.map((product) => (
          <div
            className="my-6  py-4 px-4 h-[340px] shadow-xl   w-[300px] "
            key={product.serialNumber}
          >
            <div className="relative mx-auto h-[150px] w-[50%]">
              <Link href="/">
                <Image
                  layout="fill"
                  src={`/uploads/product/${product.image_url}`}
                  alt={product.name}
                  className="object-cover mx-auto my-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <h5 className="my-6 text-md text-gray-800 font-semibold">
              {ProductSerialNo(product.serialNumber)}
            </h5>
            <p className="text-sm mb-4 w-[90%] h-[16%] text-gray-500">
              {ProductName(product.name)}
            </p>

            <form className="mt-auto">
              <input type="checkbox" id="compare" />
              <label
                htmlFor="compare"
                className="text-sm text-primary-600 mx-2  font-semibold"
              >
                Add to Compare
              </label>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
