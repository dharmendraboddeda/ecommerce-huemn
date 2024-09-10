import React from "react";
import Image from "next/image";
import AboutImage from "@/assets/about.jpg";
import { Button } from "@material-tailwind/react";

interface AboutProps {
  className?: string;
  imageStyle?: React.CSSProperties;
}

export const About = ({ className, imageStyle }: AboutProps) => {
  return (
    <div
      className={`flex flex-col-reverse gap-10 md:grid  md:grid-cols-2   xl:space-x-32 ${className}`}
    >
      <Image
        className=""
        src={AboutImage}
        style={{ height: 700, ...imageStyle }}
        alt="About"
      />
      <div className=" text-[#495A58] space-y-10 md:space-y-28">
        <h1 className="font-bold text-5xl ">More about our brand</h1>
        <p>
          Tell people about who you are, your origin, your process, or your
          inspirations. Tap into your creativity. You’ve got this. The way you
          tell your story online can make all the difference.
        </p>

        <button className="w-full md:w-fit bg-[#D4967D] text-xl text-white px-20 py-6 rounded-full">
          Learn more
        </button>
      </div>
    </div>
  );
};
