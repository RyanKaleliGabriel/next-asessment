"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Login } from "../_lib/actions";
import { showToast } from "../hooks/useToast";
import LoginButton from "./LoginButton";

function LoginForm() {
  const router = useRouter();
  const initialState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      const formData = new FormData(event.currentTarget);
      await Login(formData);
      router.push("/hawkvisi");
      showToast("success", "Welcome!!");
      setFormState(initialState);
    } catch (error: any) {
      showToast("error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      className="p-12 rounded-sm shadow-sm bg-gray-50"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm text-gray-600">Email address</label>
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          name="email"
          type="email"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md"
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm text-gray-600">Password</label>
        <input
          name="password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
          type="password"
          className="border rounded-md py-2 px-2 focus:outline-primary-500 text-md"
        />
      </div>
      <LoginButton isSubmitting={isSubmitting} pendingLabel="Logging in...">
        Login
      </LoginButton>
    </form>
  );
}

export default LoginForm;
