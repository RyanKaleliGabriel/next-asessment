import Spinner from "../_components/Spinner";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      <p className="text-lg text-gray-500">Loading Products data...</p>
    </div>
  );
}

export default loading;
