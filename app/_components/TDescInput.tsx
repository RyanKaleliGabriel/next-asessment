import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

interface TDescInputProps {
  technicalDescriptions: string[];
  handleTechnicalDescriptionChange: (index: number, value: string) => void;
  removeTechnicalDescription: (index: number) => void;
  addTechnicalDescriptions: () => void;
  disabled: boolean;
}

function TDescInput({
  technicalDescriptions,
  handleTechnicalDescriptionChange,
  removeTechnicalDescription,
  addTechnicalDescriptions,
}: TDescInputProps) {
  return (
    <div className="flex flex-col my-4">
      <div className="flex items-center gap-3 mb-2">
        <label htmlFor="tdescription" className="text-sm text-gray-500 mb-1 ">
          Technical Descriptions
        </label>
      </div>

      {technicalDescriptions.map((desc, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            name={`tdescription-${index}`}
            type="text"
            value={desc}
            onChange={(e) =>
              handleTechnicalDescriptionChange(index, e.target.value)
            }
            className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md mx-auto flex-1 w-[80%]"
          />
          <button
            type="button"
            className="ml-2 bg-primary-500 hover:bg-primary-600 duration-200 ease-in-out text-white rounded-md px-2 py-1 "
            onClick={() => removeTechnicalDescription(index)}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        className=" bg-gray-500 hover:bg-gray-600 transition-all duration-200 ease-in-out text-white rounded-md lg:w-[25%] w-[50%] gap-2 text-sm flex justify-center items-center px-2 py-1"
        onClick={addTechnicalDescriptions}
      >
        <PlusIcon className="h-5 w-5" />
        Add Description
      </button>
    </div>
  );
}

export default TDescInput;
