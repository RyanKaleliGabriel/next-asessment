import Image from "next/image";
import ComparisonTDesc from "./ComparisonTDesc";
import { ProductArray } from "../_models/product";

function TechnicalComparison({ products }: ProductArray) {
  return (
    <div>
      <h2 className="my-4 text-gray-500 rounded-md inline-block p-2 text-md">
        Technical Comparison
      </h2>
      <div className="flex gap-8">
        {products.map((product) => (
          <div key={product.name}>
            <div className="shadow-xl rounded-lg p-4">
              <div className="flex">
                {/* <RemoveComparisonForm product={product} /> */}
              </div>
              <div className="relative mx-auto flex-1 h-[160px] w-[160px]">
                <Image
                  fill
                  className="object-cover"
                  alt={product.name}
                  src={`/uploads/product/${product.image_url}`}
                />
              </div>
            </div>

            <div className="my-4 h-[115px]">
              <h3 className="font-semibold mt-2 h-[50px] text-primary-600 text-sm">
                {product.serialNumber}
              </h3>
              <h3 className=" h-[45px] text-gray-600 text-sm">
                {product.name}
              </h3>
            </div>
            <ComparisonTDesc productId={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalComparison;
