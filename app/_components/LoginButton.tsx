import { SubmitButtonProps } from "../_models/app";

function LoginButton({
  children,
  pendingLabel,
  isSubmitting,
}: SubmitButtonProps) {
  return (
    <button
      disabled={isSubmitting}
      className="bg-primary-600 w-full p-2 rounded-md font-semibold text-sm text-white hover:bg-primary-700 transition-all ease-in-out duration-200"
    >
      {isSubmitting ? pendingLabel : children}
    </button>
  );
}

export default LoginButton;
