'use client';

import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import Avatar1 from '../../../assets/icons/icon_avatar1.svg';
import Avatar2 from '../../../assets/icons/icon_avatar2.svg';
import AvatarUser from '../../../assets/icons/icon_user_avatar.svg';
import Avatar3 from '../../../assets/icons/icon_avatar2.svg';

import { ColumnRenderers } from '@/utils/tableRenderers';
const CustomerPage = () => {
  const columns = [
    'Name',
    'Email',
    'Created Date',
    'Assigned',
    'Status',
    'Value',
    'Action',
  ];
  const rows = [
    {
      name: { text: 'John Doe', avatar: Avatar1, otherData: '@username' },
      email: 'alice@example.com',
      createddate: '2025-01-10',
      assigned: [AvatarUser, AvatarUser],
      status: 'Quoted',
      value: '$1,200',
      action: ['Details', 'Edit'],
    },
    {
      name: { text: 'Jane Smith', avatar: Avatar2, otherData: '@username' },
      email: 'bob@example.com',
      createddate: '2024-11-20',
      assigned: [AvatarUser, AvatarUser,AvatarUser],
      status: 'Quoted',
      value: '$900',
      action: ['Details', 'Edit'],
    },
    {
      name: { text: 'Bob Brown', avatar: Avatar3, otherData: "@username" },
      email: 'bob@example.com',
      createddate: '2023-11-15',
      assigned: [AvatarUser],
      status: 'Quoted',
      value: '$900',
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
          } else if (column === 'Created Date') {
            return ColumnRenderers.CreatedDate(value);
          } else if (column === 'Status') {
            return ColumnRenderers.Status(value);
          }else if (column === 'Assigned') {
            return ColumnRenderers.AgentAssigned(value);
          }
          return ColumnRenderers.Common(value);
        }}
      />
    </>
  );
};

export default CustomerPage;
