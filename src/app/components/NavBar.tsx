"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { ThemeToggle } from "./ui/ToogleTheme";
import Image from "next/image";
import { assets } from "@/assets/assets";

const NavBar = () => {
  const sideBarRef = useRef<HTMLUListElement>(null);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  const openSideBar = () => {
    if (sideBarRef.current) {
      sideBarRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeSideBar = () => {
    if (sideBarRef.current) {
      sideBarRef.current.style.transform = "translateX(0)";
    }
  };
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 traslate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:p x-[8%] my-4 flex items-center justify-between z-50 ${
          scrolling ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-xs" : ""
        }`}
      >
        <a href="">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isDark ? "bg-black" : "bg-white"
          } shadow-sm bg-opacity-50`}
        >
          <li className="font-Ovo">
            <a href="#top">Home</a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#top">
              Contact me
            </a>
          </li>
        </ul>

        <div>
          <select name="" id="">
            <option value="">ES</option>
            <option value="">EN</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* <button onClick={toggleTheme}>
            <Image src={assets.moon_icon} className="w-6" alt="" />
          </button> */}
          {/* <a
            href=""
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full border-gray-500  ml-4"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a> */}

          <button className="block md:hidden" onClick={openSideBar}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/*----Mobile menu------*/}

        <ul
          ref={sideBarRef}
          className="flex items-center md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 -right-64 bg-rose-50 h-screen transition duration-500 ease-in-out"
        >
          <div className="absolute top-6 right-6" onClick={closeSideBar}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li onClick={closeSideBar} className="font-Ovo">
            <a href="#top">Home</a>
          </li>
          <li onClick={closeSideBar}>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li onClick={closeSideBar}>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li onClick={closeSideBar}>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li onClick={closeSideBar}>
            <a className="font-Ovo" href="#contact-me">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
