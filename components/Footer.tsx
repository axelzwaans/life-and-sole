import React from "react";
import Image from "next/image";
import Logo from "@/public/lifeandsolelogo.jpg";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 text-center h-[150px] items-center justify-center flex bg-black text-white w-full">
      <div className="flex w-full justify-between px-8">
        <div>
          <Image src={Logo} alt="logo" width={160} height={150} />
        </div>
        <div className="text-right space-y-2">
          <p className="">Privacy Policy</p>
          <p>News</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
