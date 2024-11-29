"use client";

import { useProductComparison } from "../_context/ProductComparisonContext";
import { comparisonCookies, deleteCookies } from "../_lib/actions";
import { showToast } from "../hooks/useToast";

function ComparisonForm({ product }: any) {
  const { products, setProducts } = useProductComparison();

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;
    if (checked) {
      try {
        if (products.length < 4) {
          setProducts([...products, product.id]);
          await comparisonCookies(product.id);
        } else {
          throw new Error("You can only compare 4 products");
        }
      } catch (error: any) {
        console.log(error.message);
        showToast("info", error.message);
      }
    } else {
      await deleteCookies(product.id);
      setProducts(products.filter((id: number) => id !== product.id));
    }
  }

  const isChecked = products.includes(product.id);

  return (
    <form className="mt-auto">
      <input
        type="checkbox"
        id="compare"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        className="text-sm text-primary-600 mx-2  font-semibold"
      >
        Add to Compare
      </label>
    </form>
  );
}

export default ComparisonForm;
