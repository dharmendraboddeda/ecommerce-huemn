import React from "react";
import Image from "next/image";
import IntroIMage from "@/assets/intro.jpg";

import DefaultLayout from "@/layouts/defaultLayout";

function HomeScreen() {
  return (
    <div className="pl-10 pr-10 md:pl-16 md:pr-16">
      <div className="bg-green-500">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full absolute">
          <h1 className="col-start-7 col-end-10 row-start-2 row-end-2 text-6xl font-bold mb-4 text-white justify-self-center self-end">
            My Brand
          </h1>
        </div>
        <Image
          src={IntroIMage}
          alt="Intro"
          style={{ height: 800, objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default DefaultLayout(HomeScreen);
