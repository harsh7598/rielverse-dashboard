'use client';

import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import { ColumnRenderers } from '@/utils/tableRenderers';
import Avatar1 from '../../../assets/icons/icon_avatar1.svg';
import Avatar2 from '../../../assets/icons/icon_avatar2.svg';
const AgentPage = () => {
  const columns = [
    'Name',
    'Email',
    'Created Date',
    'Agent Customers',
    'Commission',
    'Action',
  ];
  const rows = [
    {
      name: { text: 'John Doe', avatar: Avatar1, otherData: "@username" },
      email: 'charlie@example.com',
      createddate: '2023-05-15',
      agentcustomers: 15,
      commission: '10',
      action: ['Details', 'Edit', 'Active'],
    },
    {
      name: { text: 'Jane Smith', avatar: Avatar2, otherData: "@username" },
      email: 'dana@example.com',
      createddate: '2022-09-30',
      agentcustomers: 20,
      commission: '15',
      action: ['Details', 'Edit', 'Active'],
    },
  ];

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <>
      <TableLayout
        pageTitle='Agent List'
        columns={columns}
        rows={rows}
        onFilter={handleFilter}
        onSort={handleSort}
        onExport={handleExport}
        renderCell={(column, value, row) => {
          if (column === 'Action') {
            return ColumnRenderers.Action(value, row, () => {});
          } else if (column === 'Name') {
            return ColumnRenderers.Name(value);
          } else if (column === 'Email') {
            return ColumnRenderers.Email(value);
          } else if (column === 'Created Date') {
            return ColumnRenderers.CreatedDate(value);
          } else if (column === 'Agent Customers') {
            return ColumnRenderers.AgentCustomers(value);
          } else if (column === 'Commission') {
            return ColumnRenderers.Commission(value);
          }
          return ColumnRenderers.Common(value);
        }}
      />
    </>
  );
};

export default AgentPage;
