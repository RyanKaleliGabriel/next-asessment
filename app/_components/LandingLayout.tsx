import { ReactNode } from "react";
import { ProductComparisonProvider } from "../_context/ProductComparisonContext";
import { SearchFormProvider } from "../_context/SearchFormContext";
import { SideBarProvider } from "../_context/SideBarContext";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { getComparisonProducts } from "../_lib/data-service";
import { Toaster } from "react-hot-toast";

async function LandingLayout({ children }: { children: ReactNode }) {
  const productsComp = await getComparisonProducts();
  return (
    <ProductComparisonProvider>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--colot-grey-700)",
          },
        }}
      />
      <SideBarProvider>
        <SearchFormProvider>
          <Header productsComp={productsComp} />
          <SideBar />
        </SearchFormProvider>
        <div className="px-6 mt-[7rem] "> {children}</div>
        <Footer />
      </SideBarProvider>
    </ProductComparisonProvider>
  );
}

export default LandingLayout;
