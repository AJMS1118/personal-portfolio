import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const NavBar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:p x-[8%] my-4 flex items-center justify-between z-50">
        <a href="">
          <Image src={assets.logo} alt="" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#top">About me</a>
          </li>
          <li>
            <a href="#top">Services</a>
          </li>
          <li>
            <a href="#top">Contact me</a>
          </li>
        </ul>

        <div>
          <a
            href=""
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full border-gray-500  ml-4"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
