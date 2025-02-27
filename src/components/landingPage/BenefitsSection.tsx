import React from "react";
import { BENEFITS } from "../../utils/constants";
import Image from "next/image";

const BenefitsSection: React.FC = () => {
  return (
    <div
    data-aos="zoom-in"
    className="w-full max-w-[1000px] px-[3px] pt-[3px] rounded-3xl h-auto bg-gradient-to-t from-transparent to-primary mt-12 max-[1400px]:w-[95%] animate-fade-in"
  >
    <div className="w-full h-48 max-[800px]:h-40 max-[650px]:h-auto bg-white flex max-[650px]:flex-wrap items-center rounded-3xl">
      {BENEFITS.map((value, index) => (
        <div key={index} className="w-1/4 max-[650px]:w-1/2 h-auto flex items-center max-[650px]:mt-4">
          <div className="w-full h-auto flex flex-col justify-center items-center text-center animate-zoom-in">
            <Image
              className="w-[60px] max-[800px]:w-[45px] h-fit max-h-[60px] object-contain"
              src={value.image}
              alt={value.title}
            />
            <span className="text-[22px] max-[500px]:text-[20px] max-[800px]:text-[22px] mt-2 animate-slide-in-bottom">
              {value.title}
            </span>
            <span className="text-[14px] animate-fade-in">
              {value.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default BenefitsSection;
