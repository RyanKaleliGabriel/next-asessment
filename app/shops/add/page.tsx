import ShopForm from "@/app/_components/ShopForm";

function add() {
  return (
    <div className="bg-white py-4 px-6 shadow-sm rounded-md">
      <div>
        <h3 className="text-2xl text-primary-600 font-bold">
          New Shop
        </h3>
      </div>
      <ShopForm />
    </div>
  );
}

export default add;
