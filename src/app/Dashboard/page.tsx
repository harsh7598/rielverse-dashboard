'use client';
import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import Avatar1 from '../../assets/icons/icon_avatar1.svg';
import Avatar2 from '../../assets/icons/icon_avatar2.svg';
import Avatar3 from '../../assets/icons/icon_avatar3.svg';
import Avatar4 from '../../assets/icons/icon_avatar4.svg';

import { ColumnRenderers } from '@/utils/tableRenderers';
import { PieChartComponent } from '@/components/dashboardGraph/PieChartComponent';
import { MultiSegmentProgressDemo } from '@/components/dashboardGraph/multi-segment-progress-demo';
import { PolicyCards } from '@/components/dashboardGraph/DashboardCards';

const DashboardPage = () => {
  const columns = [
    'Name',
    'Email',
    'Model and Make',
    'Expiry Date',
    'Status',
    'Action',
  ];

  const rows = [
    {
      name: { text: 'John Doe', avatar: Avatar1, otherData: '@username' },
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
      name: { text: 'Jane Smith', avatar: Avatar2, otherData: '@username' },
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
      name: { text: 'Alice Johnson', avatar: Avatar3, otherData: '@username' },
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
      name: { text: 'Bob Brown', avatar: Avatar4, otherData: '@username' },
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

  const handleActionClick = (action: string) => {
    console.log(action);
  };

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');

  return (
    <>
      <div>
        <PolicyCards />

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <MultiSegmentProgressDemo />
          <PieChartComponent />
        </div>
      </div>

      <TableLayout
        pageTitle='Customer List'
        columns={columns}
        rows={rows}
        onFilter={handleFilter}
        onSort={handleSort}
        onExport={handleExport}
        renderCell={(column, value, row) => {
          if (column === 'Action') {
            return ColumnRenderers.Action(value, row, handleActionClick);
          } else if (column === 'Name') {
            return ColumnRenderers.Name(value);
          } else if (column === 'Email') {
            return ColumnRenderers.Email(value);
          } else if (column === 'Model and Make') {
            return ColumnRenderers.ModelAndMake(value);
          } else if (column === 'Expiry Date') {
            return ColumnRenderers.ExpiryDate(value);
          } else if (column === 'Status') {
            return ColumnRenderers.Status(value);
          }
          return value;
        }}
      />
    </>
  );
};

export default DashboardPage;
