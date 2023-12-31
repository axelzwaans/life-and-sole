import { bebasneue } from "@/app/layout";
import React from "react";

const Banner = () => {
  return (
    <div
      className="text-center h-[400px] items-center justify-center flex bg-[#ff0000] text-white m-8"
      id="banner"
    >
      <h2
        className={`${bebasneue.className} p-4 text-lg md:text-xl lg:text-2xl xl:text-3xl`}
      >
        Life & Sole is a modern, 3000ft2 personal training, rehabilitation and
        group exercise conditioning facility. It&apos;s run by qualified,
        knowledgeable and experienced staff, always on hand to assist or advise.
      </h2>
    </div>
  );
};

export default Banner;
