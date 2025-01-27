import Image from 'next/image';
import React from 'react';
import ProfileAvtar from '../../assets/icons/icon_profile_avtar.svg';
import WHatsappIco from '../../assets/icons/icon_whatsapp.svg';
import MailboxIcon from '../../assets/icons/icon_mailbox.svg';
import MessageIcon from '../../assets/icons/icon_message.svg';
import ArrowRight from '../../assets/icons/icon_arrow_right_border.svg';
import TextCopy from '../../assets/icons/icon_text_copy.svg';

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col  py-6 px-4 gap-10'>
      <div>
        <div className='text-[#1A2E62] text-lg font-semibold border-b-2 border-[#1A2E62]  w-14'>
          Profile
        </div>
        <div>Manage your account profile settings and enable notifications</div>
      </div>
      {/* Profile Card */}
      <div className='w-full max-w-3xl bg-gradient-to-r from-[#B9E9FD] to-white  border-lightContent border-2 rounded-xl p-6'>
        <div className='flex items-center space-x-8'>
          {/* Avatar Placeholder */}
          <Image src={ProfileAvtar} width={50} height={50} alt='ProfileAvtar' />
          <div>
            <h1 className='text-xl font-semibold text-gray-800 mb-2 ml-4'>
              John Copper
            </h1>
            <div className='text-xs rounded-lg font-semibold text-[#1A2E62] bg-gradient-to-r from-white to-[#F0F0F0] w-[200px] justify-center flex text-center p-1'>
              Rielverse Insurance Agent
            </div>
          </div>
        </div>
        <div className='relative flex justify-between p-6 space-x-6'>
          {/* Left Section */}
          <div className='w-2/3 space-y-6'>
            <div>
              <p className='text-base font-bold text-[#1A2E62] pb-1'>
                johncopper@gmail.com
              </p>
              <p className='text-xs pb-4'>Email</p>
              <div className='h-[1px] bg-gradient-to-r from-[#72AEE0] to-white'></div>
            </div>

            <div>
              <p className='text-base font-bold text-[#1A2E62] pb-1'>
                +62 9876545678
              </p>
              <p className='text-xs pb-4'>Phone Number</p>
              <div className='h-[1px] bg-gradient-to-r from-[#72AEE0] to-white'></div>
            </div>

            <div>
              <p className='text-base font-bold text-[#1A2E62] pb-1'>
                North 246 QLD 4500 AUD
              </p>
              <p className='text-xs pb-4'>Address</p>
              <div className='h-[1px] bg-gradient-to-r from-[#72AEE0] to-white'></div>
            </div>
          </div>

          {/* Right Section */}
          <div className='w-1/3 relative'>
            <button className='absolute bottom-0 right-0 bg-[#1E96FC] text-white py-2 px-6 rounded-lg hover:bg-blue-600'>
              Update
            </button>
          </div>
        </div>
      </div>

      {/* SuperAdmin ID */}
      <div className='w-full max-w-[341px] bg-white  rounded-2xl p-6'>
        <h2 className='text-lg font-semibold text-gray-800 mb-2'>
          SuperAdmin ID
        </h2>
        <div className='bg-[#B9E9FD33] p-4 rounded-lg flex items-center gap-2'>
          <span className='text-sm font-semibold text-[#1A2E62]'>
            RIELAD00001
          </span>
          <Image src={TextCopy} alt='TextCopy' width={16} height={16} />
        </div>
      </div>

      <div className='w-full max-w-6xl grid grid-cols-2 gap-6'>
        {/* Notification Preferences */}
        <div className='bg-white rounded-2xl p-6 '>
          <h2 className='text-lg font-semibold text-[#1A2E62]'>
            Notification Preferences
          </h2>
          <div className='text-[#4D4C4C] py-1 text-xs mb-4'>
            Turn off or on notifications to stay up to date with IAMI Insurance.
          </div>

          <div className='space-y-2 shadow-md p-2 h-[140px]'>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Push Notification</span>
              <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
                <input
                  type='checkbox'
                  name='toggle'
                  id='push'
                  className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:bg-[#1E96FC]'
                  checked
                />
                <label
                  htmlFor='push'
                  className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-[#72AEE0]'></label>
              </div>
            </div>
            <div className='flex items-center justify-between  pt-4'>
              <span className='text-sm'>Email Notifications</span>
              <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
                <input
                  type='checkbox'
                  name='toggle'
                  id='email'
                  className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:bg-[#1E96FC]'
                  checked
                />
                <label
                  htmlFor='email'
                  className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-[#72AEE0]'></label>
              </div>
            </div>
            <div className='flex items-center justify-between border-t border-[#C2C2C2] pt-4'>
              <span className='text-sm'>WhatsApp Notification</span>
              <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
                <input
                  type='checkbox'
                  name='toggle'
                  id='whatsapp'
                  className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
                />
                <label
                  htmlFor='whatsapp'
                  className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'></label>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy & Data Security */}
        <div className='bg-white rounded-2xl p-6 '>
          <h2 className='text-lg font-semibold text-[#1A2E62] mb-2'>
            Privacy & Data Security
          </h2>
          <div className='text-[#4D4C4C] py-1 text-xs mb-4'>
            You can Deactivate / Delete your IAMI account
          </div>

          <div className='space-y-4 shadow-md p-2 h-[140px]'>
            <div className='  flex items-start justify-between'>
              <div>
                <h3 className='text-sm font-semibold text-gray-800 pb-1 '>
                  Deactivate Account
                </h3>
                <p className='text-[8px] text-[#7B7B7B]'>
                  Put your account in stealth mode to archive your data with
                  encyption & hidden, reactivate later as per your command.
                </p>
              </div>
              <Image src={ArrowRight} alt='ArrowRight' width={20} height={20} />
            </div>
            <div className=' flex items-start justify-between border-t border-[#C2C2C2]'>
              <div>
                <h3 className='text-sm font-semibold text-gray-800 pt-2 pb-1'>
                  Delete Account
                </h3>
                <p className='text-[8px] text-[#7B7B7B]'>
                  Remove all my pension tracking data, plan info and account
                  settings. Once deleted, we will erase your entire PensionBox
                  account.
                </p>
              </div>
              <Image src={ArrowRight} alt='ArrowRight' width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
