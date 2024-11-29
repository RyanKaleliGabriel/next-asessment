"use client";

import toast from "react-hot-toast";
import { useModal } from "../_context/ModalContext";
import {
  deleteProduct,
  deleteShop
} from "../_lib/actions";

interface ConfirmDeleteProps {
  resourceName: string;
  id: number;
  name?: string;
}

function ConfirmDelete({ resourceName, id, name }: ConfirmDeleteProps) {
  const { close } = useModal();
  const handleDelete = async () => {
    try {
      if (resourceName === "Shop") await deleteShop(id);
      if (resourceName === "Product") await deleteProduct(id);
      close();
      toast.success(`${resourceName} Deleted successfully`);
    } catch (error) {
      toast.error(`Failed to delete ${resourceName} `);
    }
  };
  return (
    <div className="w-[30rem] text-justify flex flex-col gap-3 ">
      <h3 className="font-semibold text-2xl text-black ">
        Delete {resourceName}
      </h3>
      <p className="text-gray-500 mb-5">
        Are you sure you want to delete {name} {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div className="flex justify-end gap-5">
        <button
          onClick={close}
          className="p-2 border shadow-sm hover:bg-gray-200 transition-all duration-200 ease-in-out"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="p-2 shadow-sm bg-primary-600 text-white font-semibold hover:bg-primary-700 duration-200 ease-in-out "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
