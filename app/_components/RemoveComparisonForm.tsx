"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { revalidatePath } from "next/cache";
import React from "react";
import { useProductComparison } from "../_context/ProductComparisonContext";
import { deleteCookies } from "../_lib/actions";
import { RelatedProductProps } from "../_models/product";

function RemoveComparisonForm({ product }: RelatedProductProps) {
  const { products, setProducts } = useProductComparison();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await deleteCookies(String(product.id));
      revalidatePath("/products/compare");
    } catch (error) {
      console.error("error");
    }
  }
  return (
    <form key={product.id} className="ml-auto" onSubmit={handleSubmit}>
      <button>
        <XMarkIcon className="w-4 h-4 hover:text-primary-600 transition-all duration-300 ease-in-out" />
      </button>
    </form>
  );
}

export default RemoveComparisonForm;
