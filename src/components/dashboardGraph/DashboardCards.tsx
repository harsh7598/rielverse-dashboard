import React from 'react';
import { Plus, Minus, AlertCircle } from 'lucide-react';

import PlusIcon from '../../assets/icons/icon_plus_dashboard.svg';
import MinusIcon from '../../assets/icons/icon_minus.svg';
import AlertCircleIcon from '../../assets/icons/icon_exclametery.svg';
import Image from 'next/image';

export function PolicyCards() {
  const cards = [
    { name: 'Total Policies', value: 420, currency: false },
    { name: 'Total Quotes', value: 600, currency: false },
    { name: 'Total Earnings', value: 2600, currency: true },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='w-full p-4 border rounded-lg shadow-md border-gray-200 bg-white flex flex-col items-center relative'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-2'>
              <button className='flex items-center justify-center w-10 h-10 text-white border-lightContent border-2 rounded-lg '>
                <Image src={PlusIcon} className='' alt='PlusIcon' />
              </button>
              <span className='font-semibold text-lightSecondary text-lg'>
                {card.name}
              </span>
            </div>

            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
              <Image
                src={AlertCircleIcon}
                alt='AlertCircleIcon'
              />
            </div>

            <button className='flex items-center justify-center w-6 h-6 text-white  border-lightContent border-2 rounded-lg'>
              <Image src={MinusIcon} className='' alt='MinusIcon' />
            </button>
          </div>

          <div className='mt-2 self-start ml-14 -mt-2 text-2xl font-bold text-darkBlack'>
            { card.value}
          </div>
        </div>
      ))}
    </div>
  );
}
