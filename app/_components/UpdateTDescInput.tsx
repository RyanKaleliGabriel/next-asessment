import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { TDescription } from "../_models/tdescriptions";

interface TDescInputProps {
  technicalDescriptions: TDescription[];
  handleTechnicalDescriptionChange: (index: number, value: string) => void;
  removeTechnicalDescription: (index: number) => void;
  addTechnicalDescriptions: () => void;
  disabled: boolean;
}

function UpdateTDescInput({
  technicalDescriptions,
  handleTechnicalDescriptionChange,
  addTechnicalDescriptions,
  removeTechnicalDescription,
}: TDescInputProps) {
  return (
    <div className="flex flex-col my-4">
      <div className="flex items-center gap-3 mb-2">
        <label htmlFor="tdescription" className="text-sm text-gray-500 mb-1 ">
          Technical Descriptions
        </label>
      </div>

      {technicalDescriptions.map((desc, index) => (
        <div key={desc.id} className="flex items-center mb-2">
          <input
            name={`tdescription-${desc.id}`}
            type="text"
            defaultValue={desc.description}
            className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 mx-auto flex-1 w-[80%]"
            onChange={(e) =>
              handleTechnicalDescriptionChange(index, e.target.value)
            }
          />
          <button
            type="button"
            onClick={() => removeTechnicalDescription(index)}
            className="ml-2 bg-primary-500 hover:bg-primary-600 duration-200 ease-in-out text-white rounded-md px-2 py-1 "
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addTechnicalDescriptions}
        className=" bg-gray-500 hover:bg-gray-600 transition-all duration-200 ease-in-out text-white rounded-md lg:w-[25%] w-[50%] gap-2 text-sm flex justify-center items-center px-2 py-1"
      >
        <PlusIcon className="h-5 w-5" />
        Add Description
      </button>
    </div>
  );
}

export default UpdateTDescInput;
