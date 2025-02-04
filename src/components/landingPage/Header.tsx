'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import msg from '../../../public/Icons/Reilverse_Assets/msg.svg';
import userIcon from '../../../public/Icons/Reilverse_Assets/userIcon.svg';
import Link from 'next/link';
import Image from 'next/image';
import download from '../../../public/Icons/Reilverse_Assets/export-file 3.svg';
import logo from '../../../public/Icons/Reilverse_Assets/Logo.svg';
import arrow from '../../../public/Icons/Reilverse_Assets/ArrowDown.svg';
import girl from '../../../public/Icons/Reilverse_Assets/image 20.svg';
import myAccountImg from '../../../public/Icons/Reilverse_Assets/vectorMyAccount.svg';
import myAccountImg2 from '../../../public/Icons/Reilverse_Assets/vectorMyAccount2.svg';
import myAccountImg3 from '../../../public/Icons/Reilverse_Assets/vectorMyAccount3.svg';
import helpIcon1 from '../../../public/Icons/Reilverse_Assets/helpIcon1.svg';
import helpIcon2 from '../../../public/Icons/Reilverse_Assets/helpIcon2.svg';
import helpIcon3 from '../../../public/Icons/Reilverse_Assets/helpIcon3.svg';
import helpIcon4 from '../../../public/Icons/Reilverse_Assets/helpIcon4.svg';
import { NAV_LINKS, BUSINESS_LINKS, PERSONAL_LINKS } from '@/utils/constants';
import GoogleTranslate from './GoogleTranslate';
import { FiSearch } from 'react-icons/fi';
import { LuMenu } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdOutlinePhoneInTalk } from 'react-icons/md';

interface NavLink {
  to: string;
  title: string;
  linkName?: string;
  classList?: string;
}

interface Props {
  NAV_LINKS: NavLink[];
  personalLinks: NavLink[];
  businessLinks: NavLink[];
  logo: string;
  arrow: string;
  girl: string;
  msg: string;
  userIcon: string;
  helpIcons: string[];
  myAccountImgs: string[];
}

const Header: React.FC = () => {
  const router = useRouter();
  const [scrollCount, setScrollCount] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [unHide, setUnHide] = useState(false);
  const [unHideMsg, setUnHideMsg] = useState(false);

  function unHideHandleMsg(value: boolean) {
    setUnHideMsg(true);
  }
  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const dropdownOpenHandler = () => setDropdownOpen(true);
  const dropdownCloseHandler = () => setDropdownOpen(false);
  const dropdownOpenHandler2 = () => setDropdownOpen2(true);
  const dropdownCloseHandler2 = () => setDropdownOpen2(false);

  const handleScroll = () => {
    setScrollCount(window.scrollY);
  };

  const handleClick = (item: { routeUrl: string }) => {
    window.scrollTo(0, 0);
    router.push(item.routeUrl);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-full flex flex-col items-center absolute top-0 z-50 font-[Arboria-Book]'>
      <div className='w-full flex flex-col items-center justify-center relative bg-gradient-to-b p-4 from-white to-transparent'>
        <div className='w-full max-[1150px]:px-5 max-[1440px]:px-[80px] max-w-[1400px] min-[1800px]:max-w-[1600px] flex items-center justify-between relative z-10'>
          <div className="border-r-2 border-[#C6C6C6] pr-8">
            <Link href='/'>
              <Image
                src={logo}
                alt='Railverse Logo'
                className='w-auto h-5 md:h-7 object-contain'
              />
            </Link>
          </div>
          <div className='flex uppercase flex-row text-primary items-center justify-center max-[1150px]:hidden gap-16 min-[1600px]:mx-12 mx-3'>
            <div>
              <Link
                onMouseEnter={dropdownOpenHandler}
                onMouseLeave={dropdownCloseHandler}
                onClick={() => window.scrollTo(0, 0)}
                href='/car'
                className='text-[14px] tracking-[1px] font-semibold flex items-center gap-2'>
                Personal
                <Image className='w-5' src={arrow} alt='arrow-icon' />
              </Link>
              <div className='w-full flex justify-center'>
                <div
                  onMouseEnter={dropdownOpenHandler}
                  onMouseLeave={dropdownCloseHandler}
                  className={`${
                    dropdownOpen
                      ? 'bg-white flex absolute rounded-xl'
                      : 'bg-white hidden absolute rounded-xl'
                  }`}>
                  <div className='flex justify-center gap-3 shadow-2xl border-t px-14 py-5 backdrop-blur-2xl rounded-xl'>
                    <div>
                      {PERSONAL_LINKS.slice(0, 6).map((item, index) => (
                        <span
                          key={index}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleClick(item)}
                          className={item.classList}>
                          {item.linkName}
                        </span>
                      ))}
                    </div>
                    <div>
                      {PERSONAL_LINKS.slice(6, 12).map((item, index) => (
                        <span
                          key={index}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleClick(item)}
                          className={item.classList}>
                          {item.linkName}
                        </span>
                      ))}
                    </div>
                    <div>
                      <Image src={girl} alt='Girl Icon' className='w-[285px]' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link
                onMouseEnter={dropdownOpenHandler2}
                onMouseLeave={dropdownCloseHandler2}
                onClick={() => window.scrollTo(0, 0)}
                href='/uat/health_insurance'
                className='text-[14px] tracking-[1px] font-medium flex items-center gap-2'>
                Business
                <Image className='w-5' src={arrow} alt='arrow-icon' />
              </Link>
              <div className="w-full flex justify-center shadow-2xl">
              <div
                  onMouseEnter={dropdownOpenHandler2}
                  onMouseLeave={dropdownCloseHandler2}
                  className={`${
                    dropdownOpen2
                      ? 'bg-white flex absolute rounded-2xl'
                      : 'bg-white hidden absolute rounded-2xl'
                  }`}>
                  <div className='flex justify-center gap-4 shadow-2xl border-t px-14 py-5 backdrop-blur-2xl rounded-2xl'>
                    <div>
                      {BUSINESS_LINKS.slice(0, 9).map((item, index) => (
                        <span
                          key={index}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleClick(item)}
                          className={item.classList}>
                          {item.linkName}
                        </span>
                      ))}
                    </div>
                    <div>
                      {BUSINESS_LINKS.slice(9, 18).map((item, index) => (
                        <span
                          key={index}
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleClick(item)}
                          className={item.classList}>
                          {item.linkName}
                        </span>
                      ))}
                    </div>
                    <div>
                      <Image src={girl} alt='Girl Icon' className='w-[350px]' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {NAV_LINKS.map((value, index) => (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                key={index}
                href={value.to}
                className=' text-[14px] tracking-[1px] font-medium'>
                {value.title}
              </Link>
            ))}
            <GoogleTranslate/>
          </div>
          <div className='w-auto flex items-center max-[1150px]:hidden gap-5'>
            <div onMouseLeave={() => setUnHideMsg(false)}>
              <Image
                onMouseMove={() => unHideHandleMsg(true)}
                className='cursor-pointer w-16 '
                src={msg}
                alt='msg-icon'
              />
            </div>
            <div onMouseLeave={() => setUnHide(false)} className='text-center'>
              <Link
                onMouseEnter={() => setUnHide(true)}
                href='#'
                className="flex items-center justify-center gap-1 text-[14px] tracking-[1px] font-semibold text-primary bg-white px-7 py-3 uppercase w-fit rounded-xl shadow-md border-2 whitespace-nowrap">
                <Image className='w-8' src={userIcon} alt='user-icon' />
                My account
              </Link>
              <span className='text-primary font-medium text-[10px]'>
                Claim, renew, manage & more
              </span>
            </div>
          </div>

          <div className='flex items-center justify-center min-[1150px]:hidden gap-8'>
            <div className='p-2 rounded-full bg-primary max-[500px]:hidden'>
              <FiSearch className='text-xl' />
            </div>

            <div
              onClick={() => setOpen(!isOpen)}
              className='text-xl md:text-2xl text-primary '>
              {!isOpen ? <LuMenu /> : <IoClose />}
            </div>
          </div>
          <div
            className={`${
              isOpen ? 'top-[-24px]' : 'top-[-250vh]'
            } min-[1150px]:hidden pt-28 px-10 w-full pb-4 bg-white absolute left-0 duration-700 ease-in-out -z-10 flex flex-col items-end max-[500px]:items-start`}>
            {/* <div className='p-2 min-[500px]:hidden self-start rounded-full bg-white mb-3'>
              <FiSearch className='text-3xl' />
            </div> */}

            <div className='flex flex-col items-start gap-8 mb-4'>
              <span className='cursor-pointer text-[16px] flex items-center gap-2 relative text-gray-700 font-semibold'>
                Contact Us <FaArrowRight className='text-primary' />
              </span>
              <span className='text-[16px] flex items-center gap-2  text-gray-700 font-semibold'>
                Login <FaArrowRight className='text-primary' />
              </span>
              <span className='text-[16px] flex items-center gap-2 text-gray-700 font-semibold'>
                About Us <FaArrowRight className='text-primary' />
              </span>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                href=''
                className='text-[16px] tracking-[1px] flex items-center gap-2 text-gray-700 font-semibold'>
                Products <FaArrowRight className='text-primary' />
              </Link>

              {NAV_LINKS.map((value, index) => (
                <Link
                  key={index}
                  href={value.to}
                  className='flex text-[16px] items-center tracking-[1px] font-semibold gap-1 text-gray-700'>
                  {value.title}
                  <FaArrowRight className='text-primary' />
                </Link>
              ))}
            </div>

            <div className='w-auto flex flex-col md:flex-row max-[500px]:gap-4 items-center'>
              <div className='w-auto h-16 rounded-xl border-2 border-green-950 flex items-center px-4 py-0'>
                <MdOutlinePhoneInTalk className='text-3xl' />
                <div className='flex flex-col items-end leading-4'>
                  <span className='text-[14px] font-semibold'>
                    +91 11 4678 1000
                  </span>
                  <span className='font-bold text-[7px]'>24 Hours</span>
                </div>
              </div>

              <div className='w-auto px-4 py-2 rounded-2xl bg-white shadow flex items-center gap-3 min-[500px]:ml-8'>
                <Image
                  className='h-9 w-9 object-contain'
                  src={download}
                  alt='Download'
                />
                <span className='text-[14px] font-semibold text-primary'>
                  Get Quote
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          unHide
            ? 'w-11/12 flex justify-end ease-in duration-300'
            : 'w-11/12 hidden justify-end ease-in duration-300'
        }`}>
        <div
          onMouseMove={() => setUnHide(true)}
          onMouseLeave={() => setUnHide(false)}
          className='bg-white flex gap-2 pr-8 py-8 w-[40%] rounded-xl shadow-2xl border-t'>
          <div className='w-[30%] flex items-center overflow-hidden'>
            <Image
              className='scale-125 w-[300px] ml-[-20%]'
              src={myAccountImg}
              alt='Account Image'
              width={300}
              height={300}
            />
          </div>

          <div className='w-[35%] '>
            <Image
              className='w-full'
              src={myAccountImg2}
              alt='Customer Login'
              width={300}
              height={200}
            />
            <div className='flex items-start justify-start flex-col'>
              <p className='text-primary text-[16px] font-semibold mt-1'>
                Customer Login
              </p>
              <p className='text-left text-[13px] text-[#000] font-medium mt-1 mb-4'>
                Manage, Update policies through your dedicated Self Services
                Portal
              </p>
            </div>
            <div className='overflow-hidden cursor-pointer z-0 w-28 h-7 flex pl-7 max-[630px]:text-start items-center rounded-md text-white font-semibold bg-primary bg-gradient-to-tl from-primary to-[#1E96FC86] relative'>
              <span className='font-[400] text-[14px]'>LOGIN</span>
              <IoIosArrowForward className='text-[50px] absolute right-0 opacity-40' />
            </div>
          </div>
          <div className='w-[35%]'>
            <Image
              className='w-full'
              src={myAccountImg3}
              alt='Agent Login'
              width={300}
              height={200}
            />
            <div className='flex items-start justify-start flex-col'>
              <p className='text-primary text-[16px] font-semibold mt-1'>
                Agent Login
              </p>
              <p className='text-left text-[13px] text-[#000] font-medium mt-1 mb-4'>
                Manage, Update policies through your dedicated Self Services
                Portal
              </p>
            </div>
            <div
              onClick={showLoginModal}
              className='overflow-hidden cursor-pointer z-0 w-28 h-7 flex pl-7 max-[630px]:text-start items-center rounded-md text-white font-semibold bg-primary bg-gradient-to-tl from-primary to-[#1E96FC86] relative'>
              <span className='font-[400] text-[14px]'>LOGIN</span>
              <IoIosArrowForward className='text-[50px] absolute right-0 opacity-40' />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          unHideMsg
            ? 'w-8/12 flex justify-end ease-in duration-300'
            : 'w-8/12 hidden justify-end ease-in duration-300'
        }`}>
        <div
          onMouseEnter={() => setUnHideMsg(true)}
          onMouseLeave={() => setUnHideMsg(false)}
          className='bg-white gap-2 p-4 w-[45%] rounded-xl shadow-2xl border-t'>
          <div className='text-left w-full'>
            <p className='text-[#000] text-[14px] font-semibold'>
              How can we help you?
            </p>
            <p className='text-[#000] text-[12px] font-medium mt-1'>
              Contact our support team now!
            </p>
            <hr className='w-[90%] mt-3' />
          </div>

          <div className='w-[85%] mt-3 flex justify-between'>
            <div className='flex items-center gap-1 justify-start'>
              <div>
                <Image
                  className='w-[30px]'
                  src={helpIcon1}
                  alt='Call Center'
                  width={30}
                  height={30}
                />
              </div>
              <div className='text-left'>
                <p className='text-[#000] text-[10px]'>Call Center</p>
                <p className='text-primary text-[12px] font-semibold'>
                  +65 6287 7537
                </p>
              </div>
            </div>
            <div className='flex items-center gap-1 justify-start'>
              <div>
                <Image
                  className='w-[30px]'
                  src={helpIcon2}
                  alt='Email'
                  width={30}
                  height={30}
                />
              </div>
              <div className='text-left'>
                <p className='text-[#000] text-[10px]'>Email</p>
                <p className='text-primary text-[12px] font-semibold'>
                  support@rielverse.com
                </p>
              </div>
            </div>
          </div>

          <div className='w-[83.5%] mt-7 flex justify-between'>
            <div className='flex items-center gap-1 justify-start'>
              <div>
                <Image
                  className='w-[30px]'
                  src={helpIcon4}
                  alt='Support Ticket'
                  width={30}
                  height={30}
                />
              </div>
              <div className='text-left'>
                <p className='text-[#000] text-[10px]'>Open a support ticket</p>
                <p className='text-primary text-[12px] font-semibold'>
                  Submit a request
                </p>
                <p className='text-[#000] text-[10px]'>Anytime 24/7</p>
              </div>
            </div>
            <div className='flex items-center gap-1 justify-start'>
              <div>
                <Image
                  className='w-[30px]'
                  src={helpIcon3}
                  alt='WhatsApp'
                  width={30}
                  height={30}
                />
              </div>
              <div className='text-left'>
                <p className='text-[#000] text-[10px]'>WhatsApp</p>
                <p className='text-primary text-[12px] font-semibold'>
                  9999 19999
                </p>
                <p className='text-[#000] text-[10px]'>
                  This is a chat-only number
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
