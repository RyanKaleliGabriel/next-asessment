"use client";

import { createShop } from "../_lib/actions";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function ShopForm() {
  const initialState = {
    name: "",
    description:""
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    createShop,
    "Shop added successfully!",
    initialState,
    showToast
  );

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          id="name"
          placeholder="Amazon"
          name="name"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="description"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          defaultValue={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
          placeholder="Decsription..."
          cols={22}
          rows={5}
          className="border rounded-md  py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto"
        ></textarea>
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="image"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Shop Logo
        </label>
        <input
          name="photo"
          type="file"
          id="photo"
          className="custom-file py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Adding...">
        Add
      </SubmitButton>
    </form>
  );
}

export default ShopForm;
