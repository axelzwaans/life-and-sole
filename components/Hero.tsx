import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiChevronsDown } from "react-icons/fi";
import hero from "@/public/hero.jpg";
import Image from "next/image";
import { bebasneue } from "@/app/layout";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="top-0 left-0 h-screen">
      <div className="flex flex-col-reverse md:flex-row bg-black/95">
        <div className="flex flex-col mt-[350px]">
          <div className="p-2 ml-4">
            <h1 className={`${bebasneue.className} text-white`}>Life & Sole</h1>
            <div className="border-t border-gray-300 my-2 text-white">
              <p className="flex items-center uppercase py-2 tracking-[4px]">
                Health
                <span className="mx-2 mb-1">
                  <GoDotFill className="text-[#ff0000]" />
                </span>
                Fitness
                <span className="mx-2 mb-1">
                  <GoDotFill className="text-[#ff0000]" />
                </span>
                Performance
              </p>
              <p className="uppercase mt-8 sm:w-3/4">
                Our unique gym emphasizes functional movement, integrating
                strength and conditioning as core elements for physical
                training, catering to both rehabilitation and sporting
                performance.
              </p>
            </div>
            <div className="py-4 group">
              <button className="btn-primary flex flex-row items-center">
                <p>Explore our Club</p>
                <div className="ml-2 group-hover:translate-y-1 duration-300">
                  <FiChevronsDown size={40} />
                </div>
              </button>
            </div>
          </div>

          <div className="h-full bg-white">
            <Link href="/#banner">
              <div className="ml-4 mt-10 animate-bounce">
                <FiChevronsDown size={40} />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-[100px] md:h-screen ">
          <Image
            src={hero}
            alt="hero image"
            className="opacity-40 object-cover h-[400px] md:h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
