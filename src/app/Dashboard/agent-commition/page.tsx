'use client';

import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import { ColumnRenderers } from '@/utils/tableRenderers';
import Avatar1 from '../../../assets/icons/icon_avatar1.svg';
import Avatar2 from '../../../assets/icons/icon_avatar2.svg';
const AgentCommitionPage = () => {
  const columns = [
    'Agent Name',
    'Rate (%)',
    'Joining Date',
    'Status',
    'Policies',
    'Quotes',
    'Earnings',
    'Action',
  ];
  const rows = [
    {
      agentname: { text: 'John Doe', avatar: Avatar1, otherData: 'mail@gmail.com' },
      rate: '10%',
      joiningdate: '2020-01-01',
      status: 'Active',
      policies: 5,
      quotes: 12,
      earnings: '$2,000',
      action: ['Delete', 'Edit', 'Attach'],
    },
    {
      agentname: {
        text: 'Jane Smith',
        avatar: Avatar2,
        otherData: 'mail@gmail.com',
      },
      rate: '15%',
      joiningdate: '2019-05-10',
      status: 'Inactive',
      policies: 8,
      quotes: 20,
      earnings: '$3,500',
      action: ['Delete', 'Edit', 'Attach'],
    },
  ];

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <>
      <TableLayout
        pageTitle='Agent Commission'
        columns={columns}
        rows={rows}
        onFilter={handleFilter}
        onSort={handleSort}
        onExport={handleExport}
        renderCell={(column, value, row) => {
          if (column === 'Action') {
            return ColumnRenderers.Action(value, row, () => {});
          } else if (column === 'Agent Name') {
            return ColumnRenderers.Name(value);
          } else if (column === 'Joining Date') {
            return ColumnRenderers.JoiningDate(value);
          }
          return ColumnRenderers.Common(value);
        }}
      />
    </>
  );
};

export default AgentCommitionPage;
