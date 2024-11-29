"use client";

import { createProduct } from "../_lib/actions";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function ProductForm() {
  const initialState = {
    name: "",
    price: "",
    stock_level: "",
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    createProduct,
    "Product Added successfully",
    initialState,
    showToast
  );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 w-[23%]">
          Name
        </label>
        <input
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          name="name"
          id="name"
          placeholder="1 MP Fixed Indoor Turret Camera"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="description"
          className="text-sm text-gray-500 mb-1 w-[23%]"
        >
          Customer Description
        </label>
        <textarea
          name="cDescription"
          id="cDescription"
          value={formState.cDescription}
          onChange={(e) =>
            setFormState({ ...formState, cDescription: e.target.value })
          }
          placeholder="Decsription..."
          cols={22}
          rows={5}
          className="border rounded-md  py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        ></textarea>
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="image" className="text-sm text-gray-500 mb-1 w-[23%]">
          Product Photo
        </label>
        <input
          type="file"
          name="image_url"
          id="image_url"
          className="custom-file py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="price" className="text-sm text-gray-500 mb-1 w-[23%]">
          Price (KES)
        </label>
        <input
          id="price"
          value={formState.price}
          onChange={(e) =>
            setFormState({ ...formState, price: e.target.value })
          }
          name="price"
          type="number"
          placeholder="12000"
          className="bg-white border rounded-md  py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="discount"
          className="text-sm text-gray-500 mb-1 w-[23%]"
        >
          Stock
        </label>
        <input
          value={formState.stock}
          onChange={(e) =>
            setFormState({ ...formState, discount: e.target.value })
          }
          id="discount"
          name="discount"
          type="number"
          placeholder="5"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <SubmitButton pendingLabel="Adding..." isSubmitting={isSubmitting}>
        Add
      </SubmitButton>
    </form>
  );
}

export default ProductForm;
