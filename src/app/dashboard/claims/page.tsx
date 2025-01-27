"use client"

import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import Avatar1 from '../../../assets/icons/icon_avatar1.svg';
import Avatar2 from '../../../assets/icons/icon_avatar2.svg';
import { ColumnRenderers } from '@/utils/tableRenderers';
const ClaimsPage = () => {
  const columns = [
    'Name',
    'Email',
    'Created Date',
    'Phone',
    'ID Number',
    'Action',
  ];
  const rows = [
    {
      name: { text: 'John Doe', avatar: Avatar1, otherData: "@username" },
      email: 'eve@example.com',
      createddate: '2023-12-12',
      phone: '1234567890',
      idnumber: 'ID001',
      action: ['Details', 'Form'],
    },
    {
      name: { text: 'Jane Smith', avatar: Avatar2, otherData: "@username" },
      email: 'frank@example.com',
      createddate: '2024-01-15',
      phone: '0987654321',
      idnumber: 'ID002',
      action: ['Details', 'Form'],
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
        pageTitle='Caims Form'
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
          } else if (column === 'Created Date') {
            return ColumnRenderers.CreatedDate(value);
          }
          return ColumnRenderers.Common(value);
        }}
      />
      </>
  );
};

export default ClaimsPage;
