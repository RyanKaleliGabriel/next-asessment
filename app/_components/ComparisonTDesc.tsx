import { getTechnicalDescriptions } from "../_lib/data-service";

async function ComparisonTDesc({ productId }: any) {
  const descriptions = await getTechnicalDescriptions(String(productId));
  return (
    <ul className="">
      {descriptions.map((description) => (
        <li key={description.id} className="mb-3">
          <div>
            <p className="text-[12px] text-gray-500">
              {description.description}
            </p>
            <hr className="bg-gray-700 h-[1px] mt-2" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ComparisonTDesc;
