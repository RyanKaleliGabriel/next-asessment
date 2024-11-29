"use client";

import { updateDivision } from "../_lib/actions";
import { UpdateDivisionProps } from "../_models/division";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function UpdateDivisionForm({ categories, division }: UpdateDivisionProps) {
  const { id, name, categoryId } = division;
  const initialState = {
    id,
    name,
    categoryId,
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    updateDivision,
    "Division updated successfully",
    initialState,
    showToast
  );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input type="hidden" name="id" id="id" value={formState.id} />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          defaultValue={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          id="name"
          name="name"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="category" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Select Category
        </label>
        <select
          defaultValue={formState.categoryId}
          onChange={(e) =>
            setFormState({ ...formState, categoryId: parseInt(e.target.value) })
          }
          id="categoryId"
          name="categoryId"
          className="bg-white border rounded-md  py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto  lg:w-[21%]"
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Updating...">
        Update
      </SubmitButton>
    </form>
  );
}

export default UpdateDivisionForm;
