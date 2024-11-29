import { SortOptionsProps } from "../_models/app";

function SelectSort({ options, onChange, value }: SortOptionsProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border-2 bg-white px-4 text-sm focus:ring-primary-600 focus:border-primary-600 py-2 shadow-sm rounded-md border-primary-600"
    >
    <option disabled>Choose Option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectSort;
