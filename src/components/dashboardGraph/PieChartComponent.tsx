'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--accent))',
  'hsl(var(--lightSecondary))',
  'hsl(var(--muted))',
  'hsl(var(--secondary))',
  'hsl(var(--lightSecondary))',
];

const chartData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 59 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 81 },
  { name: 'May', value: 56 },
  { name: 'Jun', value: 55 },
];

export function PieChartComponent() {
  const averagePerformance = Math.round(
    chartData.reduce((sum, item) => sum + item.value, 0) / chartData.length,
  );

  const dataWithChanges = chartData.map((item, index) => {
    if (index === 0) {
      return { ...item, change: 0 };
    }
    const prevValue = chartData[index - 1].value;
    const change = Math.round(((item.value - prevValue) / prevValue) * 100);
    return { ...item, change };
  });
  return (
    <div className='w-full max-w-full border-lightContent rounded-lg border-[1px] shadow-none h-[250px] flex justify-between items-center p-4'>
      <div className='h-full flex-1 items-center justify-center'>
        <CardHeader className='pb-2'>
          <CardTitle>Monthly Performance</CardTitle>
        </CardHeader>
        <div className='h-[160px] w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={dataWithChanges}
                cx='50%'
                cy='100%'
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={120}
                cornerRadius={6}
                paddingAngle={-4}
                dataKey='value'>
                {dataWithChanges.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  content={({ viewBox }) => {
                    if (!viewBox) return null; 
                    const { cx, cy } = viewBox as { cx: number; cy: number }; 
                    return (
                      <g>
                        <text
                          x={cx}
                          y={cy - 10}
                          textAnchor='middle'
                          dominantBaseline='middle'
                          className='fill-foreground text-2xl font-bold'>
                          {averagePerformance}%
                        </text>
                      </g>
                    );
                  }}
                  position='center'
                />
              </Pie>
              <Tooltip
                formatter={(value, name, props) => {
                  if (name === 'value') return [`${value}%`, 'Performance'];
                  if (name === 'change') return [`${value}%`, 'Change'];
                }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '4px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='min-h-[30px] w-full flex items-center justify-center'>
          <div className='w-[76px] flex items-center justify-center text-success bg-successBg rounded-lg text-sm font-semibold'>
            +15.2%
          </div>
        </div>
      </div>

      <div className='w-[150px] text-center'>
        <div className='font-bold text-2xl'>640</div>
        <div className='text-lightSecondary font-medium text-xs flex gap-1 items-center justify-center'>
          <div className=''></div> Policies
        </div>
        <div className='font-bold text-2xl'>$186.220</div>
        <div className='text-lightSecondary font-medium text-xs flex gap-1 items-center justify-center'>
          <div className='w-2 rounded-lg h-1 bg-primary'></div> Total Earnings
        </div>
      </div>
    </div>
  );
}
