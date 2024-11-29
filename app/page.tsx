import Charts from "./_components/Charts";
import DashLatestProducts from "./_components/DashLatestProducts";
import DashStats from "./_components/DashStats";

async function page() {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div className="my-5">
          <h3 className="font-semibold text-2xl ">Hawk Vision Dashboard</h3>
        </div>
      </div>
      <DashStats />
      <Charts />
      <div className="my-8">
        <DashLatestProducts />
      </div>
    </>
  );
}

export default page;
