import { XMarkIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchForm } from "../_context/SearchFormContext";

function SearchForm() {
  const { setFormOpen } = useSearchForm();
  return (
    <div className="flex items-center py-4">
      <form className="flex items-center gap-2">
        <button>
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 hover:text-primary-600" />
        </button>
        <input
          type="text"
          placeholder="Search Products, Categories, Manufacturers"
          className="p-2 rounded-md w-[90%] focus:outline-primary-400 focus:ring-offset-0"
        />
      </form>
      <button className="mr-2" onClick={() => setFormOpen(false)}>
        <XMarkIcon className="h-5 w-5 text-gray-600 hover:text-primary-600" />
      </button>
    </div>
  );
}

export default SearchForm;
