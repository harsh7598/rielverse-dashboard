import Image from "next/image";
import React from "react";
import diamond from "../../../public/Icons/Reilverse_Assets/diamond logo.svg";
import colleges from "../../../public/Icons/Reilverse_Assets/college.svg";
import layer from "../../../public/Icons/Reilverse_Assets/about_layer.png";

const FirstSection: React.FC = () => {
  return (
    <div className="max-[520px]:px-4 max-[1200px]:px-10 ">
    <div
      className={
        "w-full max-[1300px]:max-w-[1150px] max-w-[1200px] min-[1600px]:max-w-[1400px] min-[1800px]:max-w-[1600px] h-auto flex flex-col items-center bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px]"
      }
    >
      <div className={"w-full h-auto p-[1px] bg-white z-10 rounded-[11px]"}>
        <div
          className={
            "w-full h-auto flex flex-col items-start rounded-t-xl gap-10 px-10 pt-8 pb-20"
          }
        >
          <div
            className={
              "w-full max-[1150px]:flex-col-reverse max-[1150px]:items-center flex items-start justify-between"
            }
          >
            <div
              className={
                "max-[1150px]:w-full flex flex-col items-start text-start"
              }
            >
              <span className={"text-[24px] font-semibold"}>
                About <br /> Rielverse
              </span>

              <span
                style={{ fontFamily: "Arboria-Book", fontWeight: 400 }}
                className={
                  "text-[18px] max-[1150px]:w-full min-[1150px]:w-[500px] mt-5"
                }
              >
                Work directly with Insurance experts that have over 15 years of
                experience in the insurance industry.
              </span>

              <div
                className={
                  "w-full max-w-[430px] h-[2px] bg-gradient-to-r from-[#13519C] to-transparent mt-16 "
                }
              ></div>
            </div>

            <div className={"flex relative"}>
              <Image
                src={diamond}
                alt="diamond"
                className={
                  "max-w-[238px] max-h-[175px] max-[1150px]:max-w-[128px] max-[1150px]:max-h-[78px] object-contain absolute max-[1150px]:-bottom-2 -bottom-14 max-[1150px]:-left-10 -left-32"
                }
                width={238}
                height={175}
              />
              <Image
                src={colleges}
                alt="colleges"
                className={
                  "max-w-[339px] max-h-[226px] max-[1150px]:max-w-[279px] max-[1150px]:max-h-[166px] object-contain rounded-xl"
                }
                width={339}
                height={226}
              />
            </div>
          </div>

          <div className={"w-full flex flex-col items-start text-start"}>
            <span className={"text-[24px] max-w-[550px] font-semibold"}>
              Comparing, customizing & buying insurance policies has just got
              easier
            </span>

            <span
              style={{ fontFamily: "Arboria-Book", fontWeight: 400 }}
              className={"text-[18px] mt-5"}
            >
              Rielverse is built on over a decade’s worth of insurance
              experience and expertise. Abc, our co-founder has worked in
              insurance for nearly 15 years, and understands the pain points of
              the customers who are looking to buy or renew their insurance,
              be it car, home, life or health and has been looking at how to
              resolve these issues as well as providing a solution-based
              service to his clients.
              <br />
              <br />
              This is where Abc, founder of SNG and co-founder of Rielverse was
              able to provide his digital experience to help build a user
              friendly and easy digital platform that provides an online quote
              to customers in under 1 minute, at any time, anywhere on any
              device.
            </span>
          </div>

          <div
            className={
              "w-full flex items-start gap-10 max-[1150px]:flex-col max-[1150px]:items-center"
            }
          >
            <div className={"w-[300px] h-[450px]"}>
              <div
                className={
                  "w-[300px] h-[448px] block border-2 rounded-2xl overflow-visible border-[#13519C]/50 hover:border-[#13519C] duration-300"
                }
              >
                <Image
                  src={layer}
                  alt="back layer"
                  className={
                    "w-full h-full rounded-2xl duration-300 shadow-xl hover:shadow-[#13519C]/30 hover:translate-x-3 hover:translate-y-3"
                  }
                  width={300}
                  height={448}
                />
              </div>
            </div>

            <div className={"flex flex-col items-start text-start mt-7"}>
              <span className={"text-[24px] max-w-[550px] font-semibold"}>Our Mission</span>

              <span
                style={{ fontFamily: "Arboria-Book", fontWeight: 400 }}
                className={"text-[18px] mt-5"}
              >
                Our mission is to become the most reliable platform for personal
                finance and insurance in the SNG by simplifying the process.
                Find and compare insurance policies, credit cards, loans, and
                bank accounts all in one place.
              </span>

              <span className={"text-[24px] max-w-[550px] mt-7 font-semibold"}>Our Vision</span>

              <span
                style={{ fontFamily: "Arboria-Book", fontWeight: 400 }}
                className={"text-[18px] mt-5"}
              >
                Our vision is to have you bank on us for all your personal
                finance needs. Our platform allows you to easily compare
                multiple policies side-by-side to visualize the benefits and
                advantages of each policy, thereby empowering you to make your
                own informed banking decisions.
              </span>
            </div>
          </div>

          <p
            style={{ fontFamily: "Arboria-Book", fontWeight: 400 }}
            className={"text-start"}
          >
            The team at Rielverse has been hand-picked to ensure that the same
            level of care, service and insurance expertise is what each
            customer receives, always! Constantly listening and learning so
            that the customer has the best digital experience, is able to find
            the best insurance cover quickly, easily and at the best price with
            an insurance expert at the other end of the phone or WhatsApp chat
            as support.
            <br />
            <br />
            The team at Rielverse chose to partner with Abc Insurance as their
            broker because they have nearly 15 years of experience within the
            insurance industry, and more importantly they provide a service
            that aligns itself with the values that underpin Rielverse around
            quality, transparency, speed, and best service.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FirstSection;




