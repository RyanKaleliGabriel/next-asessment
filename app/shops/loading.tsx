import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p className="text-lg text-gray-500">Loading Shops data...</p>
    </div>
  );
}

export default loading;
