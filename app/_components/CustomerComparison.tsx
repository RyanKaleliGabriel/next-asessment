import Image from "next/image";
import { Product, } from "../_models/product";

function CustomerComparison({ products }: any) {
  return (
    <div>
      {" "}
      <h2 className="my-4 mx-auto text-gray-500 rounded-md inline-block p-2 text-lg">
        Customer Comparison
      </h2>
      <div>
        {products.map((product: Product) => (
          <div key={product.id} className="flex items-center gap-4">
            <div>
              <div className="relative mx-auto flex-1 h-[160px] w-[160px]">
                <Image
                  fill
                  className="object-cover"
                  alt={product.name}
                  src={`/uploads/product/${product.image_url}`}
                />
              </div>
            </div>
            <div className="w-[50%">
              <p className="text-[12px] text-gray-500">
                {product.cDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerComparison;
