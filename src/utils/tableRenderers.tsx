import React from 'react';
import Image from 'next/image';
import Badge from '../assets/icons/icon_blue_ribbon.svg';
import Email from '../assets/icons/icon_communication.svg';
import ActiveIcon from '../assets/icons/icon_check_active.svg';
import EditIcon from '../assets/icons/icon_document.svg';
import ReceiptIcon from '../assets/icons/icon_receipt.svg';
import DateIcon from '../assets/icons/icon_interface.svg';
import DeleteIcon from '../assets/icons/icon_delete.svg';
import AttachIcon from '../assets/icons/icon_atach_document.svg';
import FormDownloadIcon from '../assets/icons/icon_atach_document.svg';

export const ColumnRenderers = {
  Name: (value: { text: string; avatar: string; otherData: string }) => (
    <div className='flex items-center gap-2'>
      <Image
        src={value?.avatar}
        alt='avatar'
        width={36}
        height={36}
        className='rounded-full'
      />
      <div>
        <div className='flex'>
          <span className='text-darkBlack text-sm font-medium mr-1'>
            {value?.text}
          </span>
          <Image src={Badge} alt='Badge' />
        </div>
        <span className='text-lightSecondary text-xs font-normal'>
          {value?.otherData}
        </span>
      </div>
    </div>
  ),
  AgentAssigned: (value:  string[] ) => (
    <div className="relative flex items-center gap-2">
      {value?.map((avatar, index) => (
        <Image
          key={index}
          src={avatar}
          alt={`avatar-${index}`}
          width={36}
          height={36}
          className="rounded-full"
          style={{
            position: 'absolute',
            left: `${index * 24}px`, 
          }}
        />
      ))}
    </div>
  ),
  Email: (value: string) => (
    <div className='flex items-center gap-2'>
      <Image src={Email} alt='Email' />
      <span className='text-lightSecondary text-sm font-normal'>{value}</span>
    </div>
  ),
  ModelAndMake: (value: {
    name: string;
    modelCode: string;
    engineSize: string;
    series: string;
    additionalInfo: string;
  }) => (
    <div>
      <div className='font-medium text-darkBlack mb-1'>{value.name}</div>
      <div className='text-sm text-lightSecondary  gap-1 flex'>
        <div>{value.modelCode}</div>
        <div>{value.engineSize}</div>
        <div>{value.series}</div>
        <div>{value.additionalInfo}</div>
      </div>
    </div>
  ),
  ExpiryDate: (value: String) => (
    <div className='flex items-center gap-2'>
      <Image className='text-gray-500' alt='date' src={DateIcon} />
      <span className='text-lightSecondary text-sm '>{value}</span>
    </div>
  ),
  JoiningDate: (value: String) => (
    <div className='flex items-center gap-2'>
      <Image className='text-gray-500' alt='date' src={DateIcon} />
      <span className='text-lightSecondary text-sm '>{value}</span>
    </div>
  ),
  IssuedDate: (value: String) => (
    <div className='flex items-center gap-2'>
      <Image className='text-gray-500' alt='date' src={DateIcon} />
      <span className='text-lightSecondary text-sm '>{value}</span>
    </div>
  ),
  CreatedDate: (value: String) => (
    <div className='flex items-center gap-2'>
      <Image className='text-gray-500' alt='date' src={DateIcon} />
      <span className='text-lightSecondary text-sm '>{value}</span>
    </div>
  ),
  Status: (value: String) => {
    return (
      <div
        className={`flex items-center gap-1  rounded-md w-[74px] text-[12px] p-1 font-medium
        ${value === 'Active' ? 'text-success border-successBorder border-2  bg-successBg' : ''}
         ${value === 'Issued' ? 'text-success border-successBorder border-2  bg-successBg' : ''}
        ${value === 'Pending' ? 'text-lightSecondary border-slate-300 border-2  bg-slate-100 ' : ''}
        ${value === 'InActive' ? 'text-red-500 border-red-200 border-2  bg-red-100' : ''}
          ${value === 'Quoted' ? 'text-yellow-500 border-yellow-500 border-2  bg-yellow-100' : ''}
      `}>
        {value === 'Active' ? (
          <Image src={ActiveIcon} alt='Active' width={16} height={16} />
        ) : value === 'Pending' ? (
          <span className='w-1.5 h-1.5 bg-lightSecondary rounded-full'></span>
        ) : (
          <span className='w-1.5 h-1.5  rounded-full'></span>
        )}
        <span className=''>{value}</span>
      </div>
    );
  },
  Action: (
    value: string[],
    row: any,
    handleActionClick: (action: string, row: any) => void,
  ) => (
    <div className='flex gap-2'>
      {value?.map((action) => {
        if (action === 'Active') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-2 py-1 border border-success text-success hover:bg-successBg rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              Active
            </button>
          );
        }
        if (action === 'InActive') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-2 py-1 border border-gray-200 text-lightSecondary hover:border-primary rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              <Image src={EditIcon} alt='Active' width={16} height={16} />
              InActive
            </button>
          );
        }
        if (action === 'Edit') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-2 py-1 border border-gray-200 text-lightSecondary hover:border-primary rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              <Image src={EditIcon} alt='Active' width={16} height={16} />
              Edit
            </button>
          );
        }
        if (action === 'Details') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-2 py-1 border border-gray-200 text-primary hover:border-primary rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              Details
            </button>
          );
        }
        if (action === 'Delete') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-3 py-1 border border-gray-200 text-lightSecondary hover:border-primary rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              <Image src={DeleteIcon} alt='Delete' width={16} height={16} />
              Delete
            </button>
          );
        }
        if (action === 'Receipt') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-3 py-1 border border-gray-200 text-lightSecondary hover:border-primary rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              <Image src={ReceiptIcon} alt='Active' width={16} height={16} />
              Receipt
            </button>
          );
        } 
        if (action === 'Attach') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-3 py-1 border border-gray-200 text-lightSecondary hover:border-primary rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              <Image src={AttachIcon} alt='Active' width={16} height={16} />
              Attach
            </button>
          );
        }
        if (action === 'Form') {
          return (
            <button
              key={action}
              className='flex items-center gap-2 px-3 py-1 border border-gray-200 text-lightSecondary hover:border-primary rounded-md font-semibold'
              onClick={() => handleActionClick(action, row)}>
              <Image src={FormDownloadIcon} alt='Active' width={16} height={16} />
              Form
            </button>
          );
        }

        return null;
      })}
    </div>
  ),
  AgentCustomers: (value: string) => (
    <div className='flex items-center gap-2'>
      <span className='text-lightSecondary text-sm font-normal'>{value}</span>
    </div>
  ),
  Commission: (value: string) => (
    <div className='flex items-center gap-2'>
      <span className='text-lightSecondary text-sm font-semibold'>
        ${value}
      </span>
    </div>
  ),
  Common: (value: string) => (
    <div className='flex items-center gap-2'>
      <span className='text-lightSecondary text-sm font-semibold'>{value}</span>
    </div>
  ),
};
