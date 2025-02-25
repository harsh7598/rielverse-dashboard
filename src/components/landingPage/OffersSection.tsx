import Image from "next/image";
import { OFFERS } from "../../utils/constants"
import finger from "../../../public/Icons/Reilverse_Assets/finger.svg";

const OffersSection = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center relative mt-20 max-[1400px]:px-4">
      {/* Background Image */}
      <Image
        className="w-fit h-[600px] absolute top-0 -z-10"
        src={finger}
        alt="Background"
      />

      {/* Section Header */}
      <div data-aos="fade-down" className="w-full flex flex-col items-center text-center">
        <span
          className="text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-[14px] md:text-[16px] lg:text-[18px] font-[500] py-[30px]"
        >
          WHY RIELVERSE.COM ?
        </span>
        <span
          className="text-transparent bg-gradient-to-b from-[#2983D3] to-[#005ABB] bg-clip-text text-[24px] md:text-[30px] lg:text-[36px] tracking-widest leading-[50px] max-[1300px]:leading-[30px] font-[600]"
        >
          Insurance Has Never Been So Simple & <br /> We Are Trying To Make It
          Even More!
        </span>
        <span
          style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
          className="text-[12px] md:text-[14px] max-[800px]:text-[16px] max-[800px]:leading-7 leading-10 mt-4 text-center"
        >
          Be it the Comparisons, Helping you find the best plan for your needs,
          Making changes to your existing policy or even claims - We are with
          you all the way!
        </span>
      </div>

      {/* Cards Section */}
      <div className="w-full min-[1800px]:max-w-[1440px] max-w-[1200px] px-[3px] pt-[3px] rounded-xl h-auto bg-gradient-to-t from-transparent to-primary mt-12 max-[800px]:mt-6">
        <div className="w-full h-auto bg-white flex max-[650px]:flex-col max-[650px]:items-center max-[650px]:gap-3 items-start max-[800px]:pt-3 pt-7 rounded-xl">
          {OFFERS.map((value, index) => (
            <div
              key={index}
              data-aos="zoom-out"
              className="w-1/3 max-[650px]:w-full h-auto flex items-center"
            >
              {/* Card Content */}
              <div className="w-full h-auto flex flex-col justify-center items-center px-4">
                <span
                  style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                  className="text-[18px]"
                >
                  {value.title}
                </span>
                <Image
                  className="w-24 h-fit max-[800px]:w-16 max-h-[65px] object-contain mt-5"
                  src={value.image}
                  alt={value.title}
                />
                <span className="text-[20px] max-[800px]:text-[18px] text-primary font-[500] mt-2">
                  {value.subtitle}
                </span>
                <span
                  style={{ fontWeight: "400", fontFamily: "Arboria-Book" }}
                  className="text-[14px] max-[800px]:text-[12px] max-[800px]:leading-5 mt-4 tracking-[0.5px] leading-7 text-center"
                >
                  {value.description}
                </span>
              </div>
              {/* Divider */}
              <div
                className={`${
                  index === 2 ? "opacity-0" : ""
                } w-0.5 max-[650px]:hidden h-52 bg-gradient-to-b from-primary to-transparent`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
