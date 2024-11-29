import { getDivisionsPerCategory, getProductsPerManufacturer } from "../_lib/data-service";
import CategoryChart from "./CategoryChart";
import ManufacturerChart from "./ManufacturerChart";

async function Charts() {
    // const productsManufacturers = await getProductsPerManufacturer();
    // const divisionCategories = await getDivisionsPerCategory();
    return (
        <div className="flex lg:flex-row flex-col items-center justify-between gap-2">
        <CategoryChart />
        <ManufacturerChart />
      </div>
    )
}

export default Charts
