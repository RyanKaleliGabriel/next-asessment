"use client";
import { useState } from "react";
import { UpdateProduct } from "../_lib/actions";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";
import { UpdateProductProps } from "../_models/product";

function UpdateProductForm({ product }: UpdateProductProps) {
  const { id, name, stock_level, price, photo } = product;
  const initialState = {
    id,
    name,
    stock_level,
    price,
    photo,
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    UpdateProduct,
    "Product Updated successfully",
    initialState,
    showToast
  );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input type="hidden" value={formState.id} name="id" id="id" />
      <input
        type="hidden"
        value={formState.photo}
        name="current_image"
        id="current_image"
      />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          defaultValue={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          name="name"
          id="name"
          placeholder="1 MP Fixed Indoor Turret Camera"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto"
        />
      </div>
     
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="photo"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Product Photo
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          className="custom-file py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto"
        />
        <p className="text-sm text-gray-500 mb-1">
          Current image {formState.photo}
        </p>
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="price"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Price (KES)
        </label>
        <input
          id="price"
          defaultValue={formState.price}
          onChange={(e) =>
            setFormState({ ...formState, price: parseInt(e.target.value) })
          }
          name="price"
          type="number"
          placeholder="12000"
          className="bg-white border rounded-md  py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="stock_level"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Stock Level
        </label>
        <input
          defaultValue={formState.stock_level}
          onChange={(e) =>
            setFormState({ ...formState, stock_level: parseInt(e.target.value) })
          }
          id="stock_level"
          name="stock_level"
          type="number"
          placeholder="5"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton pendingLabel="Updating..." isSubmitting={isSubmitting}>
        Update
      </SubmitButton>
    </form>
  );
}

export default UpdateProductForm;
