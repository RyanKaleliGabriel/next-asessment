import {
  HomeModernIcon,
  MapPinIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";
import { DashStatsProps } from "../_models/app";

async function DashStats() {
  return (
    <div className="flex lg:flex-row gap-2 flex-col justify-between mb-8">
      <div className="bg-white flex items-center gap-2 shadow-lg py-8 px-12 rounded-md">
        <Square3Stack3DIcon className="w-12 h-12 rounded-full text-primary-400 bg-primary-600 p-2" />
        <div>
          <h3 className="font-semibold">{}</h3>
          <p className="text-gray-500 text-sm">No. Products</p>
        </div>
      </div>

      <div className="bg-white flex items-center gap-2 shadow-lg py-8 px-12 rounded-md">
        <HomeModernIcon className="w-12 h-12 rounded-full text-yellow-400 bg-yellow-600 p-2" />
        <div>
          <h3 className="font-semibold"></h3>
          <p className="text-gray-500 text-sm">No. Manufacturers</p>
        </div>
      </div>

      <div className="bg-white flex items-center gap-2 shadow-lg py-8 px-12 rounded-md">
        <MapPinIcon className="w-12 h-12 rounded-full text-blue-400 bg-blue-600 p-2" />
        <div>
          <h3 className="font-semibold"></h3>
          <p className="text-gray-500 text-sm">No. Branches</p>
        </div>
      </div>
    </div>
  );
}

export default DashStats;
