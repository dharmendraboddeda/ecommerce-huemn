import React from "react";

import DefaultLayout from "@/layouts/defaultLayout";
import { Intro } from "@/containers/Intro";
import { About } from "@/containers/About";

function HomeScreen() {
  return (
    <div className="p-6 md:pl-16 md:pr-16 space-y-16">
      <Intro />
      <About />
    </div>
  );
}

export default DefaultLayout(HomeScreen);
