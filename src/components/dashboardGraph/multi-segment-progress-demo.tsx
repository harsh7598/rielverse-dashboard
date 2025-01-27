'use client';

import * as React from 'react';
import { MultiSegmentProgressBar } from './multi-segment-progress-bar';
import { CardTitle } from '@/components/ui/card';

export function MultiSegmentProgressDemo() {
  const segments = [
    { value: 20, color: 'hsl(var(--success))', label: 'Motor Insurance' },
    { value: 30, color: 'hsl(var(--primary))', label: 'Health Insurance' },
    { value: 15, color: 'hsl(var(--lightSecondary))', label: 'Life Insurance' },
  ];

  return (
    <div className="w-full max-w-full border-lightContent rounded-lg border-[1px] shadow-none h-[250px] p-6">
      <div>
        <CardTitle>Monthly Quotes</CardTitle>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center gap-2">
          <span className="text-darkBlack text-6xl font-bold">790</span>
          <span className="text-lightSecondary text-xl font-semibold min-h-[22px]">
            since last month
          </span>
          <span className="min-h-[30px] w-[76px] text-success bg-successBg rounded-lg text-sm font-semibold flex items-center justify-center">
            +15.2%
          </span>
        </div>
        <MultiSegmentProgressBar segments={segments} className="w-full" />
        <div className="flex flex-wrap gap-4">
          {segments.map((segment, index) => (
            <div key={index} className="flex flex-col">
              <div className="font-bold text-2xl">{segment.value}</div>
              <div className="flex items-center">
                <div
                  className="mr-2 w-3 rounded-lg h-2"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-lightSecondary font-medium text-xs flex gap-1 items-center">
                  {segment.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
