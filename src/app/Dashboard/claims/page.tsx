"use client"

import React from 'react';
import TableLayout from '@/components/table/TableLayout';

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
      name: 'Eve Black',
      email: 'eve@example.com',
      created: '2023-12-12',
      phone: '1234567890',
      id: 'ID001',
      action: ['Details', 'Form'],
    },
    {
      name: 'Frank Red',
      email: 'frank@example.com',
      created: '2024-01-15',
      phone: '0987654321',
      id: 'ID002',
      action: ['Details', 'Form'],
    },
  ];

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <div>
      <h1>Claims</h1>
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

export default ClaimsPage;
