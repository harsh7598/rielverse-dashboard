'use client';

import React from 'react';
import TableLayout from '@/components/table/TableLayout';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { addDays, format } from 'date-fns';
import { ColumnRenderers } from '@/utils/tableRenderers';
import Avatar2 from '../../../assets/icons/icon_avatar2.svg';
import Avatar3 from '../../../assets/icons/icon_avatar3.svg';
const QuotesPage = () => {
  const columns = [
    'Name',
    'Email',
    'Model and Make',
    'Created Date',
    'Status',
    'Action',
  ];
  const rows = [
    {
      name: { text: 'Alice Johnson', avatar: Avatar3, otherData: '@username' },
      email: 'kate@example.com',
      modelandmake: {
        name: 'Ford Fiesta',
        modelCode: '450F',
        engineSize: '1.6',
        series: 'ST',
        additionalInfo: '(D)',
      },
      createddate: '2023-03-25',
      status: 'Pending',
      action: ['Details', 'Edit', 'Receipt'],
    },
    {
      name: { text: 'Jane Smith', avatar: Avatar2, otherData: '@username' },
      email: 'leo@example.com',
      modelandmake: {
        name: 'Chevrolet Malibu',
        modelCode: '750C',
        engineSize: '2.0',
        series: 'LT',
        additionalInfo: '(Z)',
      },
      createddate: '2023-08-14',
      status: 'Pending',
      action: ['Details', 'Edit', 'Receipt'],
    },
  ];
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const handleActionClick = (action: string) => {
    console.log(action);
  };
  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <>
      {/* <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
         <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          /> 
        </PopoverContent>
      </Popover>
    </div> */}
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
          } else if (column === 'Model and Make') {
            return ColumnRenderers.ModelAndMake(value);
          } else if (column === 'Created Date') {
            return ColumnRenderers.CreatedDate(value);
          } else if (column === 'Status') {
            return ColumnRenderers.Status(value);
          }
          return ColumnRenderers.Common(value);
        }}
      />
    </>
  );
};

export default QuotesPage;
