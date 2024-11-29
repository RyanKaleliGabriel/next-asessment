"use client";

import { updateCategory } from "../_lib/actions";
import { UpdateCategoryProps } from "../_models/category";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function UpdateCategoryForm({ category }: UpdateCategoryProps) {
  const { id, name, display } = category;
  const initialState = {
    name,
    display,
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    updateCategory,
    "Category added successfully",
    initialState,
    showToast
  );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input type="hidden" defaultValue={id} name="id" id="id" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          defaultValue={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          name="name"
          id="name"
          placeholder="Access Controls"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="display" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Category Display
        </label>
        <select
          defaultValue={formState.display}
          onChange={(e) =>
            setFormState({ ...formState, display: e.target.value })
          }
          name="display"
          className="bg-white border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto  lg:w-[21%]"
        >
          <option>Featured</option>
          <option>Popular</option>
        </select>
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Updating...">
        Update
      </SubmitButton>
    </form>
  );
}

export default UpdateCategoryForm;
