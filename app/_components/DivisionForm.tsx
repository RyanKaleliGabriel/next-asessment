"use client";

import { createDivision } from "../_lib/actions";
import { DivisionFormProps } from "../_models/division";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import NoDataDropDown from "./NoDataDropDown";
import SubmitButton from "./SubmitButton";

function DivisionForm({ categories }: DivisionFormProps) {
  const initialState = {
    name: "",
    category: categories.at(0)?.id,
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    createDivision,
    "Division created successfully",
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
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          placeholder="Varifocal"
          id="name"
          name="name"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="category" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Select Category
        </label>
        {categories.length > 0 ? (
          <select
            value={formState.category}
            onChange={(e) =>
              setFormState({ ...formState, category: parseInt(e.target.value) })
            }
            id="categoryId"
            name="categoryId"
            className="bg-white border rounded-md  py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto  lg:w-[21%]"
          >
            <option disabled>Choose Category</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        ) : (
          <NoDataDropDown href="division" model="divisions" />
        )}
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Adding...">
        Add
      </SubmitButton>
    </form>
  );
}

export default DivisionForm;
