"use client";

import { createBranch } from "../_lib/actions";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function BranchesForm() {
  // UI State
  const initialState = {
    name: "",
    location: "",
    county: "",
    email: "",
    phone: "",
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    createBranch,
    "Branch added successfully",
    initialState,
    showToast
  );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          name="name"
          type="text"
          placeholder="John Doe"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="location" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Location
        </label>
        <input
          value={formState.location}
          onChange={(e) =>
            setFormState({ ...formState, location: e.target.value })
          }
          name="location"
          type="text"
          placeholder="White Ash Complex Center 2nd Floor, Munyu Road off Luthuli..."
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="email" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          County
        </label>
        <input
          value={formState.county}
          onChange={(e) =>
            setFormState({ ...formState, county: e.target.value })
          }
          name="county"
          type="text"
          placeholder="Nairobi"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="email" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Branch Email
        </label>
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          name="email"
          type="email"
          placeholder="user@gmail.com"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />

      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="number" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Phone Number
        </label>
        <input
          name="phone"
          value={formState.phone}
          onChange={(e) =>
            setFormState({ ...formState, phone: e.target.value })
          }
          type="text"
          placeholder="254 704 383 812"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="image" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Branch Image
        </label>
        <input
          type="file"
          name="image_url"
          id="image_url"
          className="custom-file py-2 px-2 focus:outline-primary-500 text-sm text-gray-700 lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Adding...">
        Add
      </SubmitButton>
    </form>
  );
}

export default BranchesForm;
