import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { useTheme } from "../context/ThemeContext";
const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <div id="about" className={`w-full px-[12%] py-10 scroll-mt-20 ${isDark ? "bg-gray-800 text-white" : ""}`}>
        <h4 className="text-center text-lg mb-2 font-Ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-Ovo">About me</h2>
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image src={assets.andrew_image} alt="user" className="w-full rounded-3xl" />
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl font-Ovo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore ut nulla aliquam aperiam
              sequi enim nostrum. Aliquid, quibusdam. Recusandae fugit dignissimos tenetur a nesciunt minus ad
              voluptatem aut unde.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
              {infoList.map((info) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black"
                  key={info.id}
                >
                  <Image className="mt-3 w-7" src={info.icon} alt={info.title} />
                  <h3 className="my-4 font-semibold text-gray-700">{info.title}</h3>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </li>
              ))}
            </ul>

            <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <li
                  className="flex justify-center items-center w-12 sm:w-14 aspect-square border cursor-pointer border-gray-400 rounded-lg hover:-translate-y-1 duration-500"
                  key={index}
                >
                  <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
