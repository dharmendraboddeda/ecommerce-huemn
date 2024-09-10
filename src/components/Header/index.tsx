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
    <div
      className={`fixed z-10 top-0 left-0 right-0 bg-[#E5E3DC]  {${className}}`}
    >
      <div className=" h-20 pl-16 pr-16 flex  items-center justify-between   ">
        <a href="/" className="font-bold text-xl cursor-pointer text-[#303636]">
          Your Site Title
        </a>
        <div className="cursor-pointer hidden lg:flex text-lg items-center pl-1 font-normal space-x-4 ">
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Cart{cartCount > 0 && `(${cartCount})`}</a>
        </div>
        <div className="lg:hidden flex items-center justify-center space-x-4 font-bold ">
          <a href="/cart">{`(${cartCount})`}</a>
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
