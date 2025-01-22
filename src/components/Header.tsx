'use client';
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/navigation';
import msg from "../../public/Icons/Reilverse_Assets/msg.svg";
import userIcon from "../../public/Icons/Reilverse_Assets/userIcon.svg";
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/Icons/Reilverse_Assets/Logo.svg';
import arrow from '../../public/Icons/Reilverse_Assets/ArrowDown.svg';
import girl from '../../public/Icons/Reilverse_Assets/image 20.svg';
import { NAV_LINKS, BUSINESS_LINKS, PERSONAL_LINKS } from '@/utils/constants';
import GoogleTranslate from './GoogleTranslate';
//import { MdOutlinePhoneInTalk } from "react-icons/md";
// import { FiSearch } from "react-icons/fi";
// import { LuMenu } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// import { Modal } from "antd";
// import { FaArrowRight } from "react-icons/fa";
// import { LOGO, DOWNLOAD_ICON } from "@/constants/assets";

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

// const Header: React.FC<Props> = ({
//   NAV_LINKS,
//   personalLinks,
//   businessLinks,
//   logo,
//   arrow,
//   girl,
//   msg,
//   userIcon,
//   helpIcons,
//   myAccountImgs,
// }) => {

const Header: React.FC = () => {
  const router = useRouter();
  const [scrollCount, setScrollCount] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [unHide, setUnHide] = useState(false);
  const [unHideMsg, setUnHideMsg] = useState(false);

  function unHideHandleMsg() {
    setUnHideMsg(true);
  }

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
    <div className='w-full h-32 flex flex-col items-center absolute top-0 z-50 font-[Arboria-Book]'>
      <div className='w-full h-72 flex flex-col items-center relative bg-gradient-to-b from-white to-transparent'>
        <div className='w-full max-[1150px]:px-5 max-[1440px]:px-[80px] max-w-[1400px] min-[1800px]:max-w-[1600px] flex items-center justify-between relative z-10 mt-6'>
          {/* Logo */}
          <div className="relative w-fit h-fit max-w-[300px] max-[500px]:h-16 flex flex-col items-center justify-center px-5 rounded-lg bg-[#fff] after:content-[''] after:block after:absolute after:border-l-[2px] after:border-greyborder after:h-10 after:w-[1px] after:right-[-6px] after:top-[-6px] after:z-0">
            <Link href='/uat'>
              <Image
                src={logo}
                alt='Railverse Logo'
                className='w-fit max-w-[300px] h-7 object-contain'
                width={300}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='flex uppercase flex-row text-[#13519C] items-center max-[1150px]:hidden gap-16 min-[1600px]:mx-12 mx-3'>
            {/* Personal Dropdown */}
            <div>
              <Link
                onMouseEnter={dropdownOpenHandler}
                onMouseLeave={dropdownCloseHandler}
                onClick={() => window.scrollTo(0, 0)}
                href='/uat/car_brand'
                className='pb-2 text-[14px] tracking-[1px] font-semibold flex items-center gap-2'>
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
                  <div className='flex justify-center gap-3 shadow-lg px-14 py-5 backdrop-blur-2xl rounded-xl'>
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
            {/* Business Dropdown */}
            <div>
              <Link
                onMouseEnter={dropdownOpenHandler2}
                onMouseLeave={dropdownCloseHandler2}
                onClick={() => window.scrollTo(0, 0)}
                href='/uat/health_insurance'
                className='pb-2 font-semibold text-[14px] tracking-[1px] font-medium flex items-center gap-2'>
                Business
                <Image className='w-5' src={arrow} alt='arrow-icon' />
              </Link>
              <div className='w-full flex justify-center'>
                <div
                  onMouseEnter={dropdownOpenHandler2}
                  onMouseLeave={dropdownCloseHandler2}
                  className={`${
                    dropdownOpen2
                      ? 'bg-white flex absolute rounded-2xl'
                      : 'bg-white hidden absolute rounded-2xl'
                  }`}>
                  <div className='flex justify-center gap-4 shadow-lg px-14 py-5 backdrop-blur-2xl rounded-2xl'>
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
                className='font-semibold text-[14px] pb-2 tracking-[1px] font-medium'>
                {value.title}
              </Link>
            ))}
          </div>
          <div className='w-auto flex items-center max-[1150px]:hidden gap-5'>
            <div onMouseLeave={() => setUnHideMsg(false)}>
              <img
                onMouseMove={() => unHideHandleMsg(true)}
                className='cursor-pointer w-16'
                src={msg}
                alt='msg-icon'
              />
            </div>
            <div onMouseLeave={() => setUnHide(false)}>
              <Link
                onMouseEnter={() => setUnHide(true)}
                href='#'
                className='flex items-center gap-1 text-[14px] tracking-[1px] font-semibold text-[#13519C] bg-white px-7 py-3 uppercase w-fit rounded-xl'>
                <img className='w-8' src={userIcon} alt='user-icon' />
                My account
              </Link>
              <span className='text-[#13519C] font-medium text-[12px]'>
                Claim, renew, manage & more
              </span>
            </div>
          </div>

          {/* Other UI Elements */}
          {/* Add similar transformations for other sections */}
        </div>
      </div>
    </div>
  );
};

export default Header;
