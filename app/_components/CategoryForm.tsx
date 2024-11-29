"use client";

import { createCategory } from "../_lib/actions";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function CategoryForm() {
  const initialState = {
    name: "",
    display: "Featured",
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    createCategory,
    "Category added successfully",
    initialState,
    showToast
  );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          name="name"
          value={formState.name}
          id="name"
          placeholder="Access Controls"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
      </div>

      <hr className="border-gray-100 my-1" />

      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="display" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Category Display
        </label>
        <select
          value={formState.display}
          onChange={(e) =>
            setFormState({ ...formState, display: e.target.value })
          }
          id="display"
          name="display"
          className="bg-white border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto  lg:w-[21%] "
        >
          <option>Featured</option>
          <option>Popular</option>
        </select>
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Adding...">
        Add
      </SubmitButton>
    </form>
  );
}

export default CategoryForm;
