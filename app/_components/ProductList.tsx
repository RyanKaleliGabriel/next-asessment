"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductName, ProductSerialNo } from "../_utils/Product";
import useProductDivisionFilter from "../hooks/useProductDivisionFilter";
import ComparisonForm from "./ComparisonForm";
import { Product } from "../_models/product";

function ProductList({ products, filter }: any) {
  const finalProducts = useProductDivisionFilter(filter, products);
  return (
    <div className="w-[80%] p-2">
      <div className="w-full flex flex-wrap gap-3  justify-center overflow-auto">
        {finalProducts.map((product: Product) => (
          <div
            className="my-6  py-4 px-4 h-[340px] shadow-xl  w-[300px] "
            key={product.id}
          >
            <div className="relative mx-auto h-[150px] w-[50%]">
              <Link href={`/products/${product.id}`}>
                <Image
                  layout="fill"
                  src={`/uploads/product/${product.image_url}`}
                  alt={product.name}
                  className="object-cover mx-auto my-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <h5 className="my-6 text-sm text-gray-800 font-semibold">
              {ProductSerialNo(product.serialNumber)}
            </h5>
            <p className="text-sm mb-4 w-[90%] h-[16%] text-gray-500">
              {ProductName(product.name)}
            </p>

            <ComparisonForm product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
