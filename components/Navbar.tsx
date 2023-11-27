"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "@/public/lifeandsolelogo.jpg";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [borderColor, setBorderColor] = useState("white");
  const [AiOutlineMenuColor, setAiOutlineMenuColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
        setBorderColor("black");
        setAiOutlineMenuColor("black");
      } else {
        setColor("transparent");
        setTextColor("white");
        setBorderColor("white");
        setAiOutlineMenuColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full h-20 z-[100] ease-in duration-300"
    >
      <div className="flex justify-between items-center w-full h-full p-8 text-white">
        <div>
          <ul
            style={{ color: `${textColor}` }}
            className="hidden lg:flex tracking-widest text-large"
          >
            <Link href="/">
              <li
                style={{ borderColor: `${borderColor}` }}
                className="uppercase"
              >
                home
              </li>
            </Link>
            <Link href="/#team">
              <li
                style={{ borderColor: `${borderColor}` }}
                className="ml-10 uppercase"
              >
                the team
              </li>
            </Link>
            <Link href="/">
              <li
                style={{ borderColor: `${borderColor}` }}
                className="ml-10 uppercase"
              >
                timetable
              </li>
            </Link>
            <Link href="/join">
              <li
                style={{ borderColor: `${borderColor}` }}
                className="ml-10 uppercase"
              >
                join
              </li>
            </Link>
            <Link href="/#contact">
              <li
                style={{ borderColor: `${borderColor}` }}
                className="ml-10 uppercase"
              >
                contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            style={{ color: `${AiOutlineMenuColor}` }}
            className="lg:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <Link className="border" href="/">
          <Image src={Logo} alt="logo" width={160} height={150} />
        </Link>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="bg-white">
            <div className="flex w-full items-center justify-between">
              <Image src={Logo} alt="logo" width={150} height={150} />
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-300 cursor-pointer p-2"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-2">
              <p className="flex items-center w-full uppercase text-sm pb-4 tracking-wider">
                Health
                <span>
                  <GoDotFill className="text-[#ff0000]" />
                </span>
                Fitness
                <span>
                  <GoDotFill className="text-[#ff0000]" />
                </span>
                Performance
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase tracking-wide text-lg flex-col space-x-10">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/#team">
                <li>The Team</li>
              </Link>
              <Link href="/">
                <li>Timetable</li>
              </Link>
              <Link href="/join">
                <li>Join</li>
              </Link>
              <Link href="/">
                <li>Contact</li>
              </Link>
            </ul>
            <div className="mt-[220px]">
              <p className="uppercase tracking-wider mb-4">Join us</p>
              <div className="flex space-x-4">
                <div className="rounded-full shadow-md shadow-gray-300 p-2 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaFacebookF size={30} />
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
