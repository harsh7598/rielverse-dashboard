'use client';
import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import { ColumnRenderers } from '@/utils/tableRenderers';
import Avatar2 from '../../../assets/icons/icon_avatar2.svg';
import Avatar3 from '../../../assets/icons/icon_avatar3.svg';
const PoliciesPage = () => {
  const columns = [
    'Name',
    'Email',
    'Model and Make',
    'Issued Date',
    'Status',
    'Action',
  ];
  const rows = [
    {
      name: { text: 'Alice Johnson', avatar: Avatar3, otherData: '@username' },
      email: 'ivy@example.com',
      modelandmake: {
        name: 'Chevrolet Malibu',
        modelCode: '750C',
        engineSize: '2.0',
        series: 'LT',
        additionalInfo: '(Z)',
      },
      issueddate: '2025-01-20',
      status: 'Issued',
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
          } else if (column === 'Issued Date') {
            return ColumnRenderers.IssuedDate(value);
          } else if (column === 'Status') {
            return ColumnRenderers.Status(value);
          }
          return ColumnRenderers.Common(value);
        }}
      />
    </>
  );
};

export default PoliciesPage;
