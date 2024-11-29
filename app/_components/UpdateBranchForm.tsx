"use client";

import { updateBranch } from "../_lib/actions";
import { UpdateBranchProps } from "../_models/branch";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function UpdateBranchForm({ branch }: UpdateBranchProps) {
  const { id, name, location, county, email, image_url, phone } = branch;
  // UI State
  const initialState = {
    name,
    location,
    county,
    email,
    phone,
    image_url,
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    updateBranch,
    "Branch updated successfully",
    initialState,
    showToast
  );

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input type="hidden" name="id" id="id" defaultValue={id} />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Name
        </label>
        <input
          defaultValue={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          name="name"
          type="text"
          placeholder="John Doe"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="location"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Location
        </label>
        <input
          defaultValue={formState.location}
          onChange={(e) =>
            setFormState({ ...formState, location: e.target.value })
          }
          name="location"
          type="text"
          placeholder="White Ash Complex Center 2nd Floor, Munyu Road off Luthuli..."
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="email"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          County
        </label>
        <input
          defaultValue={formState.county}
          onChange={(e) =>
            setFormState({ ...formState, county: e.target.value })
          }
          name="county"
          type="text"
          placeholder="Nairobi"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="email"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Branch Email
        </label>
        <input
          defaultValue={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          name="email"
          type="email"
          placeholder="user@gmail.com"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />

      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="number"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Phone Number
        </label>
        <input
          name="phone"
          defaultValue={formState.phone}
          onChange={(e) =>
            setFormState({ ...formState, phone: e.target.value })
          }
          type="text"
          placeholder="254 704 383 812"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="image"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Branch Image
        </label>
        <input
          type="file"
          name="image_url"
          id="image_url"
          className="custom-file py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>
      <hr className="border-gray-100 my-1" />
      <div>
        <input
          hidden
          name="current_image"
          type="text"
          id="current_image"
          defaultValue={image_url}
        />
        <p className="text-sm text-gray-500 mb-1">Current Image {image_url}</p>
      </div>
      <hr className="border-gray-100 my-1" />

      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Updating...">
        Update
      </SubmitButton>
    </form>
  );
}

export default UpdateBranchForm;
