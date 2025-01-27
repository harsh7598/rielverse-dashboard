import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Command, CommandInput } from '../ui/command';
import Image from 'next/image';
import arrow from '../../assets/icons/icon_arrow_sort.svg';
import filterIcon from '../../assets/icons/icon_filter_add.svg';
import sortIcon from '../../assets/icons/icon_arrow_updown.svg';
import exportIcon from '../../assets/icons/icon_export_table.svg';

type TableLayoutProps = {
  columns: string[];
  rows: Record<string, any>[];
  renderCell?: (
    column: string,
    value: any,
    row: Record<string, any>,
    colIndex: number,
  ) => React.ReactNode;
  pageTitle: string;
  onFilter?: () => void;
  onSort?: () => void;
  onExport?: () => void;
};

const TableLayout: React.FC<TableLayoutProps> = ({
  columns,
  rows,
  renderCell,
  pageTitle,
  onFilter,
  onSort,
  onExport,
}) => {
  const columnKeys = columns.map((col) =>
    col.toLowerCase().replace(/[^a-z0-9]/g, ''),
  );

  return (
    <div className='overflow-x-auto border-2 border-lightGray p-6 rounded-2xl'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl font-semibold text-dark-black'>{pageTitle}</h1>
        <div className='flex items-center space-x-4 justify-center'>
          <Command className='rounded-lg border-lightContent justify-center  border-[1px] h-[36px] shadow-none md:min-w-[50px] w-60'>
            <CommandInput placeholder='Search for something...' />
          </Command>
          <button
            onClick={onFilter}
            className='flex items-center space-x-1 p-2 rounded-lg border-lightContent border-[1px] h-[36px] hover:bg-gray-100'>
            <Image src={filterIcon} alt='Filter' width={16} />
            <span className='text-lightSecondary font-medium  text-sm'>Filter</span>
          </button>
          <button
            onClick={onSort}
            className='flex items-center space-x-1 p-2 rounded-lg border-lightContent border-[1px] h-[36px] hover:bg-gray-100'>
            <Image src={sortIcon} alt='Sort' width={16} />
            <span className='text-lightSecondary font-medium text-sm' >Sort</span>
          </button>
          <button
            onClick={onExport}
            className='flex items-center space-x-1 p-2  rounded-lg border-lightContent border-[1px] h-[36px] hover:bg-gray-100'>
            <Image src={exportIcon} alt='Export' width={15} />
            <span className='text-lightSecondary font-medium text-sm'>Export</span>
          </button>
        </div>
      </div>

      <Table className='table-auto w-full'>
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead
                key={column}
                className='text-lightSecondary items-center space-x-2'>
                <div className='flex'>
                  <span>{column}</span>
                  <Image src={arrow} alt='Sort' />
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => {
                const key = columnKeys[colIndex]; // Use mapped key
                const value = row[key];
                return (
                  <TableCell key={colIndex}>
                    {renderCell
                      ? renderCell(column, value, row, colIndex)
                      : value || '-'}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableLayout;
