import React from "react";

export const MenuSection = () => {
  return (
    <div className="lg:hidden text-[#495A58] bg-[#E5E3DC] text-3xl font-bold flex flex-col justify-center h-screen w-screen items-center space-y-6 p-4 cursor-pointer">
      <a href="/shop">Shop</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  );
};
