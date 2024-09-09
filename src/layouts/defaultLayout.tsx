import React from "react";
import type { ComponentType } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const DefaultLayout = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    return (
      <div className="bg-[#E5E3DC] min-h-screen  flex flex-col font-serif">
        <Header />
        <div className="pt-20 flex-grow">
          <Component {...props} />
        </div>
        <Footer className="mt-auto" />
      </div>
    );
  };
  return WrappedComponent;
};
export default DefaultLayout;
