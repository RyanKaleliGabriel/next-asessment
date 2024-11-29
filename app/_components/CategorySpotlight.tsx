import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getCategoriesWebsite } from "../_lib/data-service";
import CategoryList from "./CategoryList";

async function CategorySpotlight() {
  const categories = await getCategoriesWebsite();
  const finalCategories = categories
    .filter(
      (category) =>
        category._count.products > 0 && category.display === "Popular"
    )
    .slice(0, 6);

  return (
    <div className="my-24">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-lg lg:text-xl mx-auto">
            Category Spotlight
          </h1>
        </div>
        <div className=" mx-8 flex gap-2 text-primary-600 hover:underline  duration-200 hover:transition-all hover:ease-in-out items-center">
          <Link className="ml-auto text-sm" href="/categories">
            View All
          </Link>
          <ArrowRightIcon className="h-4 w-4" />
        </div>
      </div>

      <CategoryList categories={finalCategories} />
    </div>
  );
}

export default CategorySpotlight;
