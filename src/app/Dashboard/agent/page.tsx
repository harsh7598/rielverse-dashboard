'use client';

import React from 'react';
import TableLayout from '@/components/table/TableLayout';

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
      name: 'Charlie Green',
      email: 'charlie@example.com',
      created: '2023-05-15',
      customers: 15,
      commission: '10%',
      action: ['Details', 'Edit', 'Active'],
    },
    {
      name: 'Dana Blue',
      email: 'dana@example.com',
      created: '2022-09-30',
      customers: 20,
      commission: '15%',
      action: ['Details', 'Edit', 'Active'],
    },
  ];

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <>
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
    
    </>
  );
};

export default AgentPage;
