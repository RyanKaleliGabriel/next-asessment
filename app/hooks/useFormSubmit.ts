import { useState } from "react";

const useFormSubmit = (
  createFunction: (formData: any) => Promise<void>,
  successMessage: string,
  initialState: any,
  showToast: (type: string, message: string) => void
) => {
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [technicalDescriptions, setTechnicalDescriptions] = useState([""]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      const formData = new FormData(event.currentTarget);
      await createFunction(formData);
      showToast("success", successMessage);
      setFormState(initialState);
      setTechnicalDescriptions([""]);
    } catch (error: any) {
      showToast("error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    formState,
    setFormState,
    handleSubmit,
    technicalDescriptions,
    setTechnicalDescriptions,
  };
};

export default useFormSubmit;
