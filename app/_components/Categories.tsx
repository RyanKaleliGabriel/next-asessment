import Link from "next/link";
import { Category } from "../_models/category";

function Categories({ categories }: any) {
  const finalCategories = categories.slice(0, 15);
  const filteredCategories = finalCategories.filter(
    (category: Category) => category._count.products > 1
  );
  return (
    <div className="lg:inline hidden">
      <div className="lg:flex bg-primary-800 rounded-md py-2 gap-5 w-full justify-center">
        {filteredCategories.map((category: Category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="text-sm text-white  hover:border-b hover:border-white transition-all ease-in-out duration-200"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
