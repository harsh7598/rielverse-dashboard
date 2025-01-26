"use client"

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

const QuotesPage = () => {
  const columns = [
    'Name',
    'Email',
    'Model & Make',
    'Created Date',
    'Status',
    'Action',
  ];
  const rows = [
    {
      name: 'Kate Lime',
      email: 'kate@example.com',
      model: 'Tesla Model 3',
      created: '2023-03-25',
      status: 'Pending',
      action: ['Details', 'Edit', 'Receipt'],
    },
    {
      name: 'Leo Amber',
      email: 'leo@example.com',
      model: 'BMW X5',
      created: '2023-08-14',
      status: 'Pending',
      action: ['Details', 'Edit', 'Receipt'],
    },
  ];
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const handleFilter = () => alert('Filter action triggered');
  const handleSort = () => alert('Sort action triggered');
  const handleExport = () => alert('Export action triggered');
  return (
    <div>
      <h1>Quotes</h1>
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

export default QuotesPage;
