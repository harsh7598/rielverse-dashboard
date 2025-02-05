'use client';
import React, { useState } from 'react';
import TableLayout from '@/components/table/TableLayout';
import { ColumnRenderers } from '@/utils/tableRenderers';
import Avatar2 from '../../../assets/icons/icon_avatar2.svg';
import Avatar3 from '../../../assets/icons/icon_avatar3.svg';
import Download from '../../../assets/icons/icon_download.svg';
import Pending from '../../../assets/icons/icon_pending.svg';
import Drawer from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

type RowData = {
  name: { text: string; avatar: string; otherData: string };
  email: string;
  modelandmake: {
    name: string;
    modelCode: string;
    engineSize: string;
    series: string;
    additionalInfo: string;
  };
  issueddate: string;
  status: string;
  policyNumber: string;
  premium: string;
  sumInsured: string;
  brokerageName: string;
  occupation: string;
  action: string[];
};

const PoliciesPage = () => {
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

  const columns = [
    'Name',
    'Email',
    'Model and Make',
    'Issued Date',
    'Status',
    'Action',
  ];

  const rows: RowData[] = [
    {
      name: { text: 'Alice Johnson', avatar: Avatar3, otherData: '@username' },
      email: 'ivy@example.com',
      modelandmake: {
        name: 'BMW 323I 2.5 E90 (A)',
        modelCode: '750C',
        engineSize: '2930',
        series: 'LT',
        additionalInfo: '(Z)',
      },
      issueddate: '2025-01-20',
      status: 'Pending',
      policyNumber: 'PB-0000043449',
      premium: '$590',
      sumInsured: '$19000',
      brokerageName: 'Worldbridge Insurance Broker',
      occupation: 'Business',
      action: ['Details', 'Edit', 'Receipt'],
    },
    {
      name: { text: 'Jane Smith', avatar: Avatar2, otherData: '@username' },
      email: 'jack@example.com',
      modelandmake: {
        name: 'Ford Fiesta',
        modelCode: '450F',
        engineSize: '1.6',
        series: 'ST',
        additionalInfo: '(D)',
      },
      issueddate: '2024-06-15',
      status: 'Issued',
      policyNumber: 'PB-0000041234',
      premium: '$420',
      sumInsured: '$15000',
      brokerageName: 'ABC Insurance',
      occupation: 'Self-Employed',
      action: ['Details', 'Edit', 'Receipt'],
    },
  ];

  const handleActionClick = (action: string, row: RowData) => {
    if (action === 'Details') {
      setSelectedRow(row);
    }
  };

  const handleCloseDrawer = () => {
    setSelectedRow(null);
  };

  return (
    <>
      <TableLayout
        pageTitle='Customer List'
        columns={columns}
        rows={rows}
        renderCell={(column, value, row) => {
          if (column === 'Action') {
            return ColumnRenderers.Action(value, row, (action: string) =>
              handleActionClick(action, row as RowData),
            );
          } else if (column === 'Name') {
            return ColumnRenderers.Name(value);
          } else if (column === 'Email') {
            return ColumnRenderers.Email(value);
          } else if (column === 'Model and Make') {
            return ColumnRenderers.ModelAndMake(value);
          } else if (column === 'Issued Date') {
            return ColumnRenderers.IssuedDate(value);
          } else if (column === 'Status') {
            return ColumnRenderers.Status(value);
          }
          return ColumnRenderers.Common(value);
        }}
      />

      {selectedRow && (
        <Drawer isOpen={!!selectedRow} onClose={handleCloseDrawer}>
          <ScrollArea className='p-6'>
            <div className=' rounded-lg bg-white'>
              <div className='flex justify-between items-center mb-4 gap-4 h-[74px]'>
                <div className='bg-gradient-to-b from-[#2C9739] to-white rounded-[9px] p-[1px]  w-2/3 h-[74px]'>
                  <div className='flex flex-col bg-gradient-to-b from-green-100 via-green-50 to-white z-10 rounded-[8px] p-4 px-6 h-full'>
                    <div className='flex'>
                      <h2 className='text-sm font-semibold text-[#2C9739]'>
                        Policy Number :
                      </h2>
                      <p className='text-[#2C9739] text-sm font-medium pl-2'>
                        {selectedRow.policyNumber}
                      </p>
                    </div>
                    <div className='flex mt-2'>
                      <h2 className='text-sm font-semibold text-[#2C9739]'>
                        Issue Date :
                      </h2>
                      <p className='text-[#2C9739] text-sm font-medium pl-2'>
                        {selectedRow.issueddate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='bg-gradient-to-b from-[#2C9739] to-white rounded-[9px] p-[1px] w-1/3 h-[74px]'>
                  <div className=' bg-white z-10 rounded-[8px] p-2 h-full'>
                    <h2 className='text-sm font-semibold text-[#2C9739]'>
                      Policy Status
                    </h2>
                    <button className='px-3 py-1 bg-green-100 text-green-700 rounded-md text-xs font-semibold h-[25px] w-[108px] mt-2 flex justify-center items-center gap-2'>
                      <p>{selectedRow.status}</p>
                      <Image src={Pending} alt='Pending' />
                    </button>
                  </div>
                </div>
              </div>
              <div className='bg-gradient-to-b from-[#1A45D6] to-white rounded-[9px] p-[1px] mt-6'>
                <div className='p-4 px-6 bg-white z-10 rounded-[8px]'>
                  <div className='text-lg font-semibold'>Policy info</div>
                  <div className='grid grid-cols-3 gap-4 text-sm mt-3 relative'>
                    {[
                      {
                        title: 'Operating Company',
                        value: 'Forte General Insurance',
                      },
                      { title: 'Transaction Type', value: 'New Business' },
                      {
                        title: 'Brokerage Name',
                        value: selectedRow.brokerageName,
                      },
                      { title: 'Plan Type', value: 'Third Party' },
                      { title: 'Insured Name', value: selectedRow.name.text },
                      { title: 'Occupation', value: selectedRow.occupation },
                      {
                        title: 'Make & Model',
                        value: selectedRow.modelandmake.name,
                      },
                      {
                        title: 'Engine Size',
                        value: selectedRow.modelandmake.engineSize,
                      },
                      { title: 'Sum Insured', value: selectedRow.sumInsured },
                      { title: 'Premium', value: selectedRow.premium },
                    ].map((item, index) => (
                      <div key={index} className='px-4'>
                        <h3 className='font-semibold text-[#003780]'>
                          {item.title}
                        </h3>
                        <p className='text-[#7B7B7B]'>{item.value}</p>
                      </div>
                    ))}

                    <div className='absolute top-0 left-1/3 h-full w-[1.5px] bg-gradient-to-t from-[#003780] to-transparent'></div>
                    <div className='absolute top-0 left-2/3 h-full w-[1.5px] bg-gradient-to-t from-[#003780] to-transparent'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-b from-[#1A45D6] to-white rounded-[9px] p-[1px] mt-4 min-h-[300px]'>
              <div className='  p-4 px-6 bg-white z-10 rounded-[8px] min-h-[300px]'>
                <div className='text-lg font-semibold'>Documents</div>
                <table className='w-full mt-3 text-xs'>
                  <thead className=' bg-indigo-100 h-[35px]'>
                    <tr>
                      <th className='p-2 pl-6 text-left text-[#003780] first:rounded-l-lg'>
                        Document Name
                      </th>
                      <th className='p-2 text-left text-[#003780]'>
                        Timestamp
                      </th>
                      <th className='p-2 text-left text-[#003780]'>
                        File Size
                      </th>
                      <th className='p-2 text-center text-[#003780] last:rounded-r-lg'>
                        Download
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className='text-xs'>
                      <td className='p-2 pl-6 text-left font-semibold'>
                        Policy.pdf
                      </td>
                      <td className='p-2 text-left font-semibold'>
                        23/12/2024, 21:52
                      </td>
                      <td className='p-2 text-left font-semibold'>394 KB</td>
                      <td className='p-2 font-semibold text-center flex items-center justify-center'>
                        <Image src={Download} alt='Download' />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollArea>
        </Drawer>
      )}
    </>
  );
};

export default PoliciesPage;
