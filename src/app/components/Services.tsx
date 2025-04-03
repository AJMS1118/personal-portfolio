import Link from "next/link";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";

const Services = () => {
  return (
    <>
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center text-lg mb-2 font-Ovo">What I Offer</h4>
        <h2 className="text-center text-5xl font-Ovo">My Services</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni saepe, qui eum aut nemo recusandae
          commodi veritatis perspiciatis iste aliquam, voluptate accusantium, est dolorem dignissimos exercitationem
          quae laboriosam esse.
        </p>

        <div className="grid grid-cols-auto gap-6 my-10">
          {serviceData.map(({ id, title, link, icon, description }) => (
            <div
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 cursor-pointer"
              key={id}
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700">{title}</h3>
              <p className="text-sm text-gray-600 leading-5 text-left">{description}</p>
              <Link href={`${title}`} className="flex items-center gap-1 mt-3">
                Read more <Image src={assets.right_arrow} alt="" className="w-4 mt-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
