'use client';

import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import sendPlan from '../../../public/Icons/Reilverse_Assets/sendPlan.svg';
import contactIcon1 from '../../../public/Icons/Reilverse_Assets/contactIcon1.svg';
import contactIcon2 from '../../../public/Icons/Reilverse_Assets/contactIcon2.svg';
import contactIcon3 from '@/public/contactIcon3.png';
import contactIcon5 from '@/public/contactIcon5.png';
import contactIcon6 from '@/public/contactIcon6.png';

const ContactUs = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center mt-40 z-10 overflow-x-clip">
      <div className="w-10/12 rounded-xl bg-gradient-to-b from-white to-transparent p-[1.5px]">
        <div className="flex w-full justify-between h-full rounded-xl bg-white overflow-hidden pr-8 pl-14 py-4">
          <div className="w-[50%] flex flex-col items-start">
            <p className="text-[#13519C] text-[24px] font-semibold">Contact Us</p>
            <span className="text-[#717171] font-normal text-[14px] mt-2">
              Any question or remarks? Just write us a message!
            </span>
            <div className="w-full mt-10">
              <form>
                <div className="flex gap-8">
                  <div className="flex flex-col items-start w-[47%]">
                    <label className="text-[#8D8D8D] text-[14px] font-medium" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                      type="text"
                      name="firstName"
                    />
                  </div>
                  <div className="flex flex-col items-start w-[47%]">
                    <label className="text-[#8D8D8D] text-[14px] font-medium" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                      type="text"
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="flex gap-8 mt-10">
                  <div className="flex flex-col items-start w-[47%]">
                    <label className="text-[#8D8D8D] text-[14px] font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col items-start w-[47%]">
                    <label className="text-[#8D8D8D] text-[14px] font-medium" htmlFor="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      className="w-full border-b-2 text-[#8D8D8D] border-[#8D8D8D] outline-0 bg-transparent pb-1 mt-2"
                      type="tel"
                      name="phoneNumber"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start mt-10">
                  <p className="text-[#8D8D8D] text-[14px] font-medium">Message</p>
                  <input
                    type="text"
                    placeholder="Write your message.."
                    className="bg-transparent h-[40px] text-[14px] placeholder:text-slate-400 w-full border-b-2 border-[#8D8D8D] outline-0"
                  />
                </div>
                <Link href="/uat" className="flex justify-end mt-10">
                  <button className="overflow-hidden cursor-pointer my-4 w-48 h-11 flex pl-7 items-center rounded-lg text-[24px] text-white font-semibold bg-[#13519C] bg-gradient-to-tl from-[#13519C] to-[#2983D3] relative">
                    <span className="font-[400] text-[16px]">Send Message</span>
                    <IoIosArrowForward className="text-[250px] absolute -right-8 opacity-40" />
                  </button>
                </Link>
                <div className="flex justify-end">
                  <Image src={sendPlan} alt="send-plan" />
                </div>
              </form>
            </div>
          </div>
          <div className="w-[42%] rounded-t-xl h-fit bg-gradient-to-b from-[#2983D3] to-transparent p-[1.5px]">
            <div className="flex flex-col w-full items-start h-full rounded-t-xl bg-white overflow-hidden p-6">
              <p className="text-[#3B3B3B] text-[24px] font-semibold">Need help ?</p>
              <p className="text-[#000] text-[16px] mt-1">Choose how you like to connect with us</p>
              <div className="mt-6 w-full">
                <div className="border-b border-[#E4E4E4] pb-5">
                  <div className="flex justify-between w-5/6">
                    <div className="flex gap-5 items-center">
                      <Image src={contactIcon1} alt="contactIcon1" />
                      <p className="text-[#000] font-semibold text-[16px]">Request a call back</p>
                    </div>
                  </div>
                </div>
                <div className="border-b border-[#E4E4E4] pb-5 mt-5">
                  <div className="flex justify-between w-5/6">
                    <div className="flex gap-5 items-center">
                      <Image src={contactIcon2} alt="contactIcon2" />
                      <p className="text-[#000] font-semibold text-[16px]">Chat with us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
