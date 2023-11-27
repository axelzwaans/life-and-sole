import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiChevronsDown, FiChevronsLeft } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { bebasneue } from "../layout";
import hero from "@/public/hero.jpg";
import JoinForm from "@/components/JoinForm";

const page = () => {
  return (
    <div className="top-0 left-0 h-full">
      <div className="flex flex-col-reverse lg:flex-row bg-black/95">
        <div className="flex flex-col mt-[150px]">
          <div className="p-2 ml-4 lg:w-[600px] w-fit">
            <h1 className={`${bebasneue.className} text-white`}>
              Sign up today
            </h1>
            <div className="border-t border-gray-300 my-2 text-white">
              <JoinForm />
            </div>
          </div>

          <div className="h-full bg-white">
            <div className="p-6 flex flex-col lg:flex-row lg:space-x-4">
              <div>
                <h3 className="border-b border-[#ff0000]">Membership</h3>
                <p>
                  Annual Life & Sole Membership Fee:{" "}
                  <span className="border-b border-black">£10</span>
                </p>
                <p>Gym & Cardio Membership: £30/mth</p>
                <p>Unlimited Class Membership: £45/mth</p>
                <p>Family Membership (2 Adults): £40/mth</p>
                <p>Age 65+ (Off-peak): £15/mth</p>
                <p>Student (16-18): £20/mth</p>
              </div>
              <div>
                <h3 className="border-b border-[#ff0000]">Pay as you go</h3>
                <p>Gym & Cardio: £5/Session</p>
                <p>Class: £5/Class</p>
                <p>Visitor Day Pass: £5</p>
              </div>
            </div>
            <Link href="/">
              <div className="ml-4 mt-10 animate-pulse">
                <FiChevronsLeft size={40} />
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:h-screen hidden lg:block">
          <Image
            src={hero}
            alt="hero image"
            className="opacity-40 object-cover h-[300px] lg:h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
