import React from "react";
import { serviceData } from "@/assets/assets";

const Service = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const service = serviceData.find((service) => service.title === slug);
  return (
    <>
      <div>
        <h1>Dynamic page of the services</h1>
        <h2>{service?.title}</h2>
        <p>{service?.description}</p>
      </div>
    </>
  );
};

export default Service;
