"use client";
import { UpdateProfileData } from "../_lib/actions";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function ProfileDataForm({ user }: any) {
  const initialState = {
    name: user.name,
    email: user.email,
    image_url: user.image_url,
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    UpdateProfileData,
    "Credentials updated successfully!",
    initialState,
    showToast
  );

  return (
    <form
      className="w-full bg-white px-5 py-4 rounded-md"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input type="hidden" name="id" value={user.id} />

      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="name" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Username
        </label>
        <input
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          id="name"
          placeholder="John Doe"
          name="name"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="email"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Email
        </label>
        <input
          disabled
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          id="email"
          placeholder="user@gmail.com"
          name="email"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="image"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Profile photo
        </label>
        <input
          type="file"
          name="image_url"
          id="image_url"
          className="custom-file py-2 px-2 focus:outline-primary-500 text-md mx-auto"
        />
        <input
          hidden
          name="current_image"
          type="text"
          id="current_image"
          defaultValue={formState.image_url}
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Updating...">
        Update Account
      </SubmitButton>
    </form>
  );
}

export default ProfileDataForm;
