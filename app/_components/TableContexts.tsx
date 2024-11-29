import { ReactNode, Suspense } from "react";
import { ModalProvider } from "../_context/ModalContext";
import { MenuProvider } from "../_context/MenuContext";
import Spinner from "./Spinner";

function TableContexts({ children }: any) {
  return (
    <Suspense fallback={<Spinner />}>
      <ModalProvider>
        <MenuProvider>{children}</MenuProvider>
      </ModalProvider>
    </Suspense>
  );
}

export default TableContexts;
