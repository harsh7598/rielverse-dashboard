"use client"

import React from 'react';
import TableLayout from '@/components/table/TableLayout';

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
      name: 'Alice Brown',
      email: 'alice@example.com',
      created: '2025-01-10',
      assigned: 'Agent A',
      status: 'Quoted',
      value: '$1,200',
      action: ['Details', 'Edit'],
    },
    {
      name: 'Bob White',
      email: 'bob@example.com',
      created: '2024-11-20',
      assigned: 'Agent B',
      status: 'Quoted',
      value: '$900',
      action: ['Details', 'Edit'],
    },
  ];

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <div>
      <h1>Customer</h1>
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

export default CustomerPage;
