import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { MenuSection } from "../MenuSection";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const cartCount = 0;
  return (
    <div className={`fixed top-0 left-0 right-0   {${className}}`}>
      <div className=" h-20 pl-12 pr-12 flex  items-center justify-between   ">
        <h1 className="font-bold text-xl cursor-pointer text-[#303636]">
          Your Site Title
        </h1>
        <div className="cursor-pointer hidden lg:flex text-lg items-center pl-1 font-normal space-x-4 ">
          <text>Shop</text>
          <text>About</text>
          <text>Contact</text>
          <text>Cart</text>
        </div>
        <div className="lg:hidden flex items-center justify-center space-x-4 font-bold ">
          <text>{`(${cartCount})`}</text>
          {isMenuOpen ? (
            <RxCross1
              size={30}
              className="text-[#495A58]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <HiMenuAlt4
              size={30}
              className="text-[#495A58]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
      </div>
      {isMenuOpen && <MenuSection />}
    </div>
  );
};
