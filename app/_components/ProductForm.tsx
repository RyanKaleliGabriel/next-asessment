"use client";

import { createProduct } from "../_lib/actions";
import { Shops } from "../_models/shop";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import NoDataDropDown from "./NoDataDropDown";
import SubmitButton from "./SubmitButton";

function ProductForm({shops}:Shops) {
  const initialState = {
    name: "",
    price: "",
    stock_level: "",
    shop_id:""
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
          placeholder="Smartphone X"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="shop_id"
          className="text-sm text-gray-500 mb-1 w-[23%]"
        >
          Select Shop
        </label>
        {shops.length > 0 ? (
          <select
            name="shop_id"
            id="shop_id"
            value={formState.shop_id}
            onChange={(e) =>
              setFormState({
                ...formState,
                shop_id: parseInt(e.target.value),
              })
            }
            className="bg-white border rounded-md  py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto lg:w-[32%]"
          >
            <option disabled>Choose Shop</option>
            {shops.map((shop) => (
              <option value={shop.id} key={shop.id}>
                {shop.name}
              </option>
            ))}
          </select>
        ) : (
          <NoDataDropDown href="shops" model="shops" />
        )}
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="photo" className="text-sm text-gray-500 mb-1 w-[23%]">
          Product Photo
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
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
          id="stock_level"
          name="stock_level"
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
