"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Admin, DeactivateFormProps } from "../_models/admin";
import ConfirmDelete from "./ConfirmDelete";
import ModalOpen from "./ModalOpen";
import ModalWindow from "./ModalWindow";

function DeactivateForm({ user }: DeactivateFormProps) {
  return (
    <>
      <ModalOpen opens={`delete-${user.email}`}>
        <button
          //   disabled={isSubmitting}
          className=" flex items-center gap-2 mt-5 mr-auto bg-primary-800 py-3 px-4 font-semibold hover:bg-primary-700 duration-200 transition-all ease-in-out rounded-md text-sm text-white"
        >
          <i>
            <TrashIcon className="h-4 w-4" />{" "}
          </i>
          <p>Deactivate this account</p>{" "}
        </button>
      </ModalOpen>

      <ModalWindow name={`delete-${user.email}`}>
        <ConfirmDelete resourceName="Account" id={user.id} name={user.email} />
      </ModalWindow>
    </>
  );
}

export default DeactivateForm;
