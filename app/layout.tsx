import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import DashNav from "./_components/DashNav";
import DashSide from "./_components/DashSide";
import DashSideMenu from "./_components/DashSideMenu";
import { DashSideProvider } from "./_context/DashSideContext";
import type { Metadata } from "next";

import "@/app/_styles/globals.css";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s / HawkVision Technologies",
    default: "Welcome / HawkVision Technologies",
  },
  description: "No. 1 National distributor of HikVision Products Countrywide.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-white  text-gray-900 min-h-screen  relative`}
      >
        <main className="relative z-10"><>
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
      <DashSideProvider>
        <div className="flex h-screen overflow-hidden ">
          <div className="fixed top-0 left-0 w-full z-50">
            <DashNav />
          </div>
          <div className="flex bg-gray-100 w-full">
            <div className="fixed top-0 left-0 shadow-md  bg-white h-full z-50 hidden lg:inline">
              <DashSide />
            </div>
            <main className="flex-grow my-20 lg:ml-56 w-full">
              <DashSideMenu />
              <div className="overflow-scroll h-screen pt-[1rem] pb-[7rem] lg:px-8 px-2 px-auto mt-[1rem]">
                {children}
              </div>
            </main>
          </div>
        </div>
      </DashSideProvider>
    </></main>
      </body>
    </html>
  );
}

// function Layout({ children }: { children: ReactNode }) {
//   return (
    
//   );
// }

// export default Layout;
