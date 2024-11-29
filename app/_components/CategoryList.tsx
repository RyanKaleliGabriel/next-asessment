"use client";
import Image from "next/image";
import Link from "next/link";
import { Category, CategoryArrayProps } from "../_models/category";

function CategoryList({ categories }: CategoryArrayProps) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {categories.map((category: Category) => (
        <div
          key={category.name}
          className="flex gap-2  items-center border border-gray-300 py-8 shadow-lg"
        >
          <div className="relative ">
            <Image
              width={100}
              height={100}
              src={`/uploads/product/${category.image_url}`}
              alt={category.name}
              className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="pt-5 w-full pb-2 px-7">
            <h3 className="text-md font-semibold">{category.name}</h3>
            <p className="text-sm text-gray-500">
              {`${category._count.products} products available`}
            </p>
            <div className="ml-auto text-right">
              <Link
                className="py-4 px-6 border-gray-200 inline-block text-primary-800 hover:text-primary-600 hover:transition-all duration-300 ease-in-out"
                href={`/categories/${category.id}`}
              >
                Check&rarr;
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
