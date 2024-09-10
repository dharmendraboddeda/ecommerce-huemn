import React from "react";
import Image from "next/image";
import IntroImage from "@/assets/intro.jpg";

export const Intro = () => {
  return (
    <div>
      <div
        style={{ height: 750, width: "94%" }}
        className="flex absolute justify-center   items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">My Brand</h1>
      </div>
      <Image
        src={IntroImage}
        alt="Intro"
        style={{ height: 750, objectFit: "cover" }}
      />
    </div>
  );
};
