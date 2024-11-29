import ProductForm from "@/app/_components/ProductForm";

async function page() {
  return (
    <div className="bg-white py-4 px-6 shadow-sm rounded-md">
      <div>
        <h3 className="text-2xl text-primary-600 font-bold">Add new Product</h3>
      </div>
      <ProductForm />
    </div>
  );
}

export default page;
