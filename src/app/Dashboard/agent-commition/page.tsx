"use client"

import React from 'react';
import TableLayout from '@/components/table/TableLayout';

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
      name: 'George White',
      rate: '10%',
      joining: '2020-01-01',
      status: 'Active',
      policies: 5,
      quotes: 12,
      earnings: '$2,000',
      action: ['Delete', 'Edit', 'Attach'],
    },
    {
      name: 'Helen Gray',
      rate: '15%',
      joining: '2019-05-10',
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
    <div>
      <h1>Agent Commition</h1>
      <TableLayout
        pageTitle='Agent'
        columns={columns}
        rows={rows}
        onFilter={handleFilter}
        onSort={handleSort}
        onExport={handleExport}
        renderCell={(column, value) => {
          if (column === 'Action') {
            return (
              <button className='text-blue-500 hover:underline'>{value}</button>
            );
          }
          return value;
        }}
      />
    </div>
  );
};

export default AgentCommitionPage;
