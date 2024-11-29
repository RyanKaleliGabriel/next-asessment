"use client";

import { updateShop } from "../_lib/actions";
import { UpdateShopProps } from "../_models/shop";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function UpdateShopForm({ shop }: UpdateShopProps) {
  const { id, name, description, logo } = shop;
  const initialState = {
    name,
    description,
    logo,
  };
  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    updateShop,
    "Shop updated successfully!",
    initialState,
    showToast
  );
  return (
    <form
      className="w-full"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input type="hidden" id="id" name="id" value={id} />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          defaultValue={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          id="name"
          placeholder="Ezviz"
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
          name="logo"
          type="file"
          id="logo"
          className="custom-file py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
        <input
          hidden
          name="current_image"
          type="text"
          id="current_image"
          defaultValue={logo}
        />
        <p className="text-sm text-gray-500 mb-1">Current Logo {logo}</p>
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Updating...">
        Update
      </SubmitButton>
    </form>
  );
}

export default UpdateShopForm;
