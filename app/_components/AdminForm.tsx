"use client";
import { createAdmin } from "../_lib/actions";
import useFormSubmit from "../hooks/useFormSubmit";
import { showToast } from "../hooks/useToast";
import SubmitButton from "./SubmitButton";

function AdminForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const { isSubmitting, formState, setFormState, handleSubmit } = useFormSubmit(
    createAdmin,
    "Admin added successfully!",
    initialState,
    showToast
  );

  return (
    <form
      className="w-full"
        onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
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
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="email" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Email
        </label>
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          id="email"
          placeholder="user@gmail.com"
          name="email"
          type="text"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <div className="flex lg:flex-row flex-col lg:items-center justify-start my-4">
        <label htmlFor="password" className="text-sm text-gray-500 mb-1 lg:w-[23%]">
          Password
        </label>
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          id="password"
          placeholder="********"
          name="password"
          type="password"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md lg:mx-auto"
        />
      </div>

      <hr className="border-gray-100 my-1" />
      <SubmitButton isSubmitting={isSubmitting} pendingLabel="Adding...">
        Add
      </SubmitButton>
    </form>
  );
}

export default AdminForm;
