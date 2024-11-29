"use client";
import { SubmitButtonProps } from "../_models/app";

function SubmitButton({
  children,
  pendingLabel,
  isSubmitting,
}: SubmitButtonProps) {
  return (
    <button
      disabled={isSubmitting}
      className="bg-primary-600 py-3 px-4 font-semibold hover:bg-primary-700 duration-200 transition-all ease-in-out rounded-md text-sm text-white"
    >
      {isSubmitting ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
