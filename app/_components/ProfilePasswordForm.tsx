"use client";
import { updatePassword } from "../_lib/actions";
import { DeactivateFormProps } from "../_models/admin";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function ProfilePasswordForm({ user }: DeactivateFormProps) {
  const initialState = {
    newPassword: "",
    confirmPassword: "",
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    updatePassword,
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
      <input type="text" name="id" value={user.id} hidden />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="password"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          New Password
        </label>
        <input
          value={formState.name}
          onChange={(e) =>
            setFormState({ ...formState, newPasssword: e.target.value })
          }
          id="password"
          placeholder="********"
          name="newPassword"
          type="password"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label
          htmlFor="password"
          className="text-sm text-gray-500 mb-1 lg:w-[23%]"
        >
          Confirm Password
        </label>
        <input
          value={formState.name}
          onChange={(e) =>
            setFormState({ ...formState, confirmPassword: e.target.value })
          }
          id="password"
          placeholder="********"
          name="confirmPassword"
          type="password"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Adding...">
        Update Password
      </SubmitButton>
    </form>
  );
}

export default ProfilePasswordForm;
