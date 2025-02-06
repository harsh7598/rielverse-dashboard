'use client';

import React, { useState } from 'react';
import { Header } from '@/components';
import Image, { StaticImageData } from 'next/image';
import searchicon from '../../../public/Icons/Reilverse_Assets/searchicon.svg';
import audi from '../../../public/Images/carLogos/audi.webp';
import baic from '../../../public/Images/carLogos/baic.jpeg';
import chevrolet from '../../../public/Images/carLogos/chevrolet.jpg';
import bmw from '../../../public/Images/carLogos/bmw.png';
import cadillac from '../../../public/Images/carLogos/cadillac.webp';
import ford from '../../../public/Images/carLogos/ford.webp';
import volkswagen from '../../../public/Images/carLogos/volkswagen.jpg';
import hyundai from '../../../public/Images/carLogos/hyundai.webp';
import jaguar from '../../../public/Images/carLogos/jaguar.webp';
import toyota from '../../../public/Images/carLogos/toyota.webp';
import righthead from '../../../public/Icons/Reilverse_Assets/bg_right.svg';
import vectorarrow from '../../../public/Icons/Reilverse_Assets/Vectorarrow.svg';
import { IoIosArrowForward } from 'react-icons/io';
import CarFooter from '@/components/footer/CarFooter';
type Brand = {
  name: string;
  logo: StaticImageData;
  models: string[];
};
export default function page() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [carModels, setCarModels] = useState<string[]>([]);

  const brands = [
    {
      name: 'Audi',
      logo: audi,
      models: ['A3', 'A4', 'Q3', 'Q5', 'A6'],
    },
    {
      name: 'Baic',
      logo: baic,
      models: ['M50', 'BJ40', 'Senova', 'X25', 'X55'],
    },
    {
      name: 'Chevrolet',
      logo: chevrolet,
      models: [
        'Camaro',
        'Malibu',
        'Spark',
        'Equinox',
        'Traverse',
      ],
    },
    {
      name: 'BMW',
      logo: bmw,
      models: ['BMW X1', 'BMW X3', 'BMW X5', 'BMW M3', 'BMW M5'],
    },
    {
      name: 'Cadillac',
      logo: cadillac,
      models: [
        'CT5',
        'XT4',
        'XT6',
        'Escalade',
        'CT4',
      ],
    },
    {
      name: 'Ford',
      logo: ford,
      models: [
        'F-150',
        'Escape',
        'Explorer',
        'Edge',
        'Mustang',
      ],
    },
    {
      name: 'Volkswagen',
      logo: volkswagen,
      models: ['VW Golf', 'VW Passat', 'VW Tiguan', 'VW Atlas', 'VW Jetta'],
    },
    {
      name: 'Hyundai',
      logo: hyundai,
      models: [
        'Elantra',
        'Tucson',
        'Sonata',
        'Kona',
        'Santa Fe',
      ],
    },
    {
      name: 'Jaguar',
      logo: jaguar,
      models: [
        'Jaguar XE',
        'Jaguar XF',
        'Jaguar F-Pace',
        'Jaguar E-Pace',
        'Jaguar I-Pace',
      ],
    },
    {
      name: 'Toyota',
      logo: toyota,
      models: [
        'Corolla',
        'Camry',
        'RAV4',
        'Prius',
        'Highlander',
      ],
    },
  ];

  const handleBrandClick = (brand: Brand) => {
    setSelectedBrand(brand.name);
    setCarModels(brand.models);
  };

  return (
    <div className='w-full bg-gradient-to-b from-[#98bae3] to-transparent h-60 to bg-white'>
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full flex justify-center pt-20 md:pt-30 lg:pt-40 px-4 md:px-8 lg:px-16 min-h-screen'>
        <div className='w-full max-w-[860px] flex flex-col z-10'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray mb-6 pl-8'>
            Car
          </h1>
          <div className='w-full bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px]'>
            <div className='p-[30px] bg-white z-10 rounded-[11px]'>
              <h1 className='text-xl md:text-2xl font-medium text-gray-800 mb-2'>
                You are looking for a car insurance for...
              </h1>
              <p className='text-sm md:text-lg text-gray-600 mb-4'>
                Fill the questionnaire to get your personalized car insurance
                quote.
              </p>
              <div className='mb-6 flex flex-col gap-1 md:gap-2'>
                <label
                  htmlFor='car-brand'
                  className='text-[15px] md:text-[18px] text-gray-700 font-bold pb-4'>
                  Select car brand
                </label>
                <div className='relative'>
                  <input
                    type='text'
                    id='car-brand'
                    placeholder='Select car brand'
                    className='w-full max-w-[350px] border border-[#1A45D6] rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                  <Image
                    src={searchicon}
                    alt='searchicon'
                    className='w-6 h-6 bg-color-blue absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                  />
                </div>
              </div>

              {/* Popular Brands Section */}
              <div>
                <h2 className='text-[#1A45D6] text-[15px] md:text-[18px] font-bold mb-4'>
                  Popular Brands
                </h2>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-8'>
                  {brands.map((brand) => (
                    <div
                      key={brand.name}
                      className={`h-[100px] rounded-[10px] p-[1px] flex items-center justify-center ${
                        selectedBrand === brand.name
                          ? 'bg-gradient-to-b from-[#96aeff] to-white'
                          : 'bg-gradient-to-b from-[#1A45D6] to-white'
                      }`}>
                      <button
                        onClick={() => handleBrandClick(brand)}
                        className={`flex flex-col items-center justify-center w-full h-full p-[1px] rounded-[11px] ${
                          selectedBrand === brand.name
                            ? 'bg-gradient-to-b from-[#96aeff] to-white'
                            : 'bg-white hover:bg-gradient-to-b hover:from-[#96aeff] hover:to-white'
                        }`}>
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          className='w-[80px] h-[40px] p-[1px]'
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Car Models Section */}
          {selectedBrand && (
            <div className=' w-full bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px] mt-16'>
              <div className='p-[20px] bg-white z-10 rounded-[11px]'>
                <div className='p-[10px] bg-white z-10 rounded-[11px]'>
                  <h1 className='text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-2'>
                    Select the modal of the car
                  </h1>
                  <p className='text-[10px] md:text-[12px] text-gray-600 mb-4'>
                    Need help ?
                  </p>
                  {/* Select Car Modal Section */}
                  <div className='mb-6'>
                    <div className='relative'>
                      <input
                        type='text'
                        id='car-brand'
                        placeholder='Select car Modal'
                        className='w-full max-w-[350px] border border-[#1A45D6] rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      />
                      <Image
                        src={searchicon}
                        alt='searchicon'
                        className='w-6 h-6 bg-color-blue absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
                    {carModels.map((model, index) => (
                      <div
                        key={index}
                        className='h-fit p-[1px] rounded-lg bg-gradient-to-b from-[rgba(26,69,214,0.6)] to-[#1A45D6]'>
                        <div className='text-[13px] md:text-[15px] lg:text-[17px] bg-white text-center rounded-lg p-2'>
                          {model}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='min-h-screen bg-white flex flex-col pt-10'>
                    <div className='w-full max-w-md space-y-14'>
                      {/* Dropdown Section */}
                      <div>
                        <label htmlFor='year-manufacture' className='text-lg md:text-xl lg:text-2xl font-medium text-gray-800'>
                        What is year of manufacture ?
                        </label>
                        <p className='text-[10px] md:text-[12px] text-gray-600 mt-2 mb-4'>
                          Need help ?
                        </p>
                        <div className='relative'>
                          <select
                            id='year'
                            className='text-[15px] md:text-[17px] lg:text-[19px] w-full max-w-[250px] border border-[#1A45D6] rounded-lg px-4 py-2 text-[#13519C] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
                            style={{
                              backgroundImage: `url(${vectorarrow.src})`,
                              backgroundPosition: 'right 10px center',
                              backgroundRepeat: 'no-repeat',
                            }}>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                          </select>
                        </div>
                      </div>

                      {/* Engine Size Section */}
                      <div>
                        <label
                          htmlFor='engine-size'
                          className='text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-4'>
                          What is the engine size ?
                        </label>
                        <p className='text-[10px] md:text-[12px] text-gray-600 mt-2 mb-4'>Need Help ?</p>
                        <div className='relative'>
                          <select
                            id='engine-size'
                            className='text-[15px] md:text-[17px] lg:text-[19px] w-full max-w-[250px] border border-[#1A45D6] rounded-lg px-4 py-2 text-[#13519C] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
                            style={{
                              backgroundImage: `url(${vectorarrow.src})`,
                              backgroundPosition: 'right 10px center',
                              backgroundRepeat: 'no-repeat',
                            }}>
                            <option>5000</option>
                            <option>5500</option>
                            <option>5800</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>

                      {/* Sum Insured Section */}
                      <div>
                        <label
                          htmlFor='sum-insured'
                          className='text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-4'>
                          What is the Sum Insured ?
                        </label>
                        <p className='text-[10px] md:text-[12px] text-gray-600 mt-2 mb-4'>Need Help ?</p>
                        <div className='relative'>
                          <select
                            id='sum-insured'
                            className='text-[15px] md:text-[17px] lg:text-[19px] w-full max-w-[250px] border border-[#1A45D6] rounded-lg px-4 py-2 text-[#13519C] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
                            style={{
                              backgroundImage: `url(${vectorarrow.src})`,
                              backgroundPosition: 'right 10px center',
                              backgroundRepeat: 'no-repeat',
                            }}>
                            <option>19000</option>
                            <option>18000</option>
                            <option>17000</option>
                            <option>15000</option>
                          </select>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className='overflow-hidden w-[180px] h-10 flex pl-7 items-center self-start rounded-xl text-[11px] text-white font-semibold bg-[#2263D5] relative mt-3 cursor-pointer'>
                        <span className='font-normal uppercase'>Processed</span>
                        <IoIosArrowForward className='text-[150px] absolute -right-8 opacity-40' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <CarFooter />
    </div>
  );
}
