import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const HeroSection = () => {
  return (
    <>
      <section className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3 2xl:gap-4">
        <div>
          <Image src={assets.andrew_image} alt="" className="rounded-full w-32" />
        </div>
        <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi, I am Andrew Quesada <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">full stack Web developer based in Cuba.</h1>
        <p className="max-w-2xl mx-auto font-Ovo">
          I am a Full Stack Developer from Granma, with more than 5 years of experienced in multiples companies like,
          CluzStudios, Reserva, etc
        </p>
        <div className="flex items-center flex-col md:flex-row gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white text-white rounded-full bg-black flex items-center gap-2"
          >
            Contact me <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
          <a
            href="/andrew-cv.pdf"
            download
            className="px-10 py-3 flex items-center gap-2 border rounded-full border-gray-500"
          >
            My resume <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
