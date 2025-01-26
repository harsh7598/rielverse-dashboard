"use client"

import React from 'react';
import TableLayout from '@/components/table/TableLayout';

const PoliciesPage = () => {
  const columns = ['Name', 'Email', 'Model & Make', 'Issued Date', 'Status', 'Action'];
  const rows = [
    { name: 'Ivy Pink', email: 'ivy@example.com', model: 'Ford Focus', issued: '2025-01-20', status: 'Issued', action: ['Details', 'Edit', 'Receipt'] },
    { name: 'Jack Cyan', email: 'jack@example.com', model: 'Chevy Bolt', issued: '2024-06-15', status: 'Issued', action: ['Details', 'Edit', 'Receipt'] },
  ];

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <div>
      <h1>Policies</h1>
      <TableLayout  pageTitle='Agent'
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
        }} />
    </div>
  );
};

export default PoliciesPage;