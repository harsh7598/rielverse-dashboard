'use client';
import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import { FaCalendarAlt, FaInfoCircle, FaEdit, FaReceipt } from 'react-icons/fa';
import Image from 'next/image';
import Avatar1 from '../../assets/icons/icon_avatar1.svg';
import Avatar2 from '../../assets/icons/icon_avatar2.svg';
import Avatar3 from '../../assets/icons/icon_avatar3.svg';
import Avatar4 from '../../assets/icons/icon_avatar4.svg';
import Badge from '../../assets/icons/icon_blue_ribbon.svg';
import Email from '../../assets/icons/icon_communication.svg';
import DateIcon from '../../assets/icons/icon_interface.svg';
import ActiveIcon from '../../assets/icons/icon_check_active.svg';
import EditIcon from '../../assets/icons/icon_document.svg';
import ReceiptIcon from '../../assets/icons/icon_receipt.svg';

type ColumnRenderers = {
  Name: (value: { text: string; avatar: string }) => React.ReactNode;
  Email: (value: string) => React.ReactNode;
  'Model and Make': (value: {
    name: string;
    modelCode: string;
    engineSize: string;
    series: string;
    additionalInfo: string;
  }) => React.ReactNode;
  'Expiry Date': (value: string) => React.ReactNode;
  Status: (value: string) => React.ReactNode;
  Action: (
    value: string[],
    row: RowData,
    handleActionClick: (action: string, row: RowData) => void,
  ) => React.ReactNode;
};

const columnRenderers: ColumnRenderers = {
  Name: (value) => (
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
          @username
        </span>
      </div>
    </div>
  ),
  Email: (value) => (
    <div className='flex items-center gap-2'>
      <Image src={Email} alt='Email' />
      <span className='text-lightSecondary text-sm font-normal'>{value}</span>
    </div>
  ),
  'Model and Make': (value) => (
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
  'Expiry Date': (value) => (
    <div className='flex items-center gap-2'>
      <Image className='text-gray-500' alt='date' src={DateIcon} />
      <span>{value}</span>
    </div>
  ),
  Status: (value) => {
    return (
      <div
        className={`flex items-center gap-1  rounded-md w-[74px] text-[12px] p-1 font-medium
        ${value === 'Active' ? 'text-success border-successBorder border-2  bg-successBg' : ''}
        ${value === 'Pending' ? 'text-lightSecondary border-slate-300 border-2  bg-slate-100 ' : ''}
        ${value === 'InActive' ? 'text-red-500 border-red-200 border-2  bg-red-100' : ''}
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
  Action: (value, row, handleActionClick) => {
    return (
      <div className='flex gap-2'>
        {value?.map((action) => {
          if (action === 'Details' && row.status === 'Active') {
            return (
              <button
                key={action}
                className='flex items-center gap-2 px-2 py-1 border border-gray-200 text-primary hover:border-primary rounded-md font-semibold'
                onClick={() => handleActionClick(action, row)}>
                Details
              </button>
            );
          }

          if (action === 'Edit' && row.status !== 'InActive') {
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
          return null;
        })}
      </div>
    );
  },
};

type RowData = {
  name: { text: string; avatar: string };
  email: string;
  modelandmake: {
    name: string;
    modelCode: string;
    engineSize: string;
    series: string;
    additionalInfo: string;
  };
  expirydate: string;
  status: string;
  action: string[];
};
export default function DashboardPage() {
  const columns: (keyof ColumnRenderers | string)[] = [
    'Name',
    'Email',
    'Model and Make',
    'Expiry Date',
    'Status',
    'Action',
  ];

  const rows: RowData[] = [
    {
      name: { text: 'John Doe', avatar: Avatar1 },
      email: 'john@example.com',
      modelandmake: {
        name: 'Toyota Corolla',
        modelCode: '323I',
        engineSize: '2.5',
        series: 'E90',
        additionalInfo: '(A)',
      },
      expirydate: '2025-01-01',
      status: 'Active',
      action: ['Details', 'Edit', 'Receipt'],
    },
    {
      name: { text: 'Jane Smith', avatar: Avatar2 },
      email: 'jane@example.com',
      modelandmake: {
        name: 'Honda Civic',
        modelCode: '123H',
        engineSize: '1.8',
        series: 'EX',
        additionalInfo: '(M)',
      },
      expirydate: '2024-12-01',
      status: 'Pending',
      action: ['Details', 'Edit', 'Receipt'],
    },
    {
      name: { text: 'Alice Johnson', avatar: Avatar3 },
      email: 'alice@example.com',
      modelandmake: {
        name: 'Ford Fiesta',
        modelCode: '450F',
        engineSize: '1.6',
        series: 'ST',
        additionalInfo: '(D)',
      },
      expirydate: '2023-11-15',
      status: 'InActive',
      action: ['Details', 'Edit', 'Receipt'],
    },
    {
      name: { text: 'Bob Brown', avatar: Avatar4 },
      email: 'bob@example.com',
      modelandmake: {
        name: 'Chevrolet Malibu',
        modelCode: '750C',
        engineSize: '2.0',
        series: 'LT',
        additionalInfo: '(Z)',
      },
      expirydate: '2026-05-22',
      status: 'Active',
      action: ['Details', 'Edit', 'Receipt'],
    },
  ];

  const handleActionClick = (action: string, row: RowData) => {
    console.log(row, action);
  };

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');

  return (
    <TableLayout
      pageTitle='Dashboard'
      columns={columns}
      rows={rows}
      onFilter={handleFilter}
      onSort={handleSort}
      onExport={handleExport}
      renderCell={(column, value, row) => {
        if (column in columnRenderers) {
          return columnRenderers[column as keyof ColumnRenderers](
            value,
            row as RowData,
            handleActionClick,
          );
        }
        return value;
      }}
    />
  );
}
