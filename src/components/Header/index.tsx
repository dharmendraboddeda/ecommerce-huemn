import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { MenuSection } from "../MenuSection";
import Link from "next/link";

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
        <Link
          href="/"
          className="font-bold text-xl cursor-pointer text-[#303636]"
        >
          Your Site Title
        </Link>
        <div className="cursor-pointer hidden lg:flex text-lg items-center pl-1 font-normal space-x-4 ">
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart">Cart{cartCount > 0 && `(${cartCount})`}</Link>
        </div>
        <div className="lg:hidden flex items-center justify-center space-x-4 font-bold ">
          <Link href="/cart">{`(${cartCount})`}</Link>
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
