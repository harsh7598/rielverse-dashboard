'use client';

import React, { useState } from 'react';
import { Header } from '@/components';
import Image from 'next/image';
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

export default function page() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [carModels, setCarModels] = useState([]);

  const brands = [
    {
      name: 'Audi',
      logo: audi,
      models: ['Audi A3', 'Audi A4', 'Audi Q3', 'Audi Q5', 'Audi A6'],
    },
    {
      name: 'Baic',
      logo: baic,
      models: ['Baic M50', 'Baic BJ40', 'Baic Senova', 'Baic X25', 'Baic X55'],
    },
    {
      name: 'Chevrolet',
      logo: chevrolet,
      models: [
        'Chevy Camaro',
        'Chevy Malibu',
        'Chevy Spark',
        'Chevy Equinox',
        'Chevy Traverse',
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
        'Cadillac CT5',
        'Cadillac XT4',
        'Cadillac XT6',
        'Cadillac Escalade',
        'Cadillac CT4',
      ],
    },
    {
      name: 'Ford',
      logo: ford,
      models: [
        'Ford F-150',
        'Ford Escape',
        'Ford Explorer',
        'Ford Edge',
        'Ford Mustang',
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
        'Hyundai Elantra',
        'Hyundai Tucson',
        'Hyundai Sonata',
        'Hyundai Kona',
        'Hyundai Santa Fe',
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
        'Toyota Corolla',
        'Toyota Camry',
        'Toyota RAV4',
        'Toyota Prius',
        'Toyota Highlander',
      ],
    },
  ];

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand.name);
    setCarModels(brand.models);
  };

  return (
    <div className='w-full'>
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-center pt-40 px-4 md:px-8 lg:px-16 min-h-screen'>
        {/* Left Section */}
        <div className='w-full md:w-1/4 h-screen flex flex-col items-start p-2'>
          <div className='space-y-8'>
            {/* Step Item */}
            <div className='flex items-center space-x-6'>
              <div className='w-4 h-4 bg-blue-500 border-2 border-gray-400 rounded-full'></div>
              <div className=' bg-gradient-to-l from-[#1A45D6] to-white rounded-[10px] p-[1px]'>
                <div className='w-[140px] h-[55px] text-blue-600 flex justify-center items-center text-[20px] font-semibold p-[1px] bg-gradient-to-l from-[#C2D1F1] to-white z-10 rounded-[11px]'>
                  Car
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-10'>
              {/* Step Items */}
              <div className='flex items-center space-x-4'>
                <div className='w-4 h-4 border-2 border-gray-400 rounded-full'></div>
                <div className=' bg-gradient-to-l from-[#7E7E7E] to-white rounded-[10px] p-[1px]'>
                  <div className='w-[200px] h-[55px] text-gray-600 flex justify-center items-center text-[18px] font-medium p-[1px] bg-white z-10 rounded-[11px]'>
                    Quote
                  </div>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='w-4 h-4 border-2 border-gray-400 rounded-full'></div>
                <div className=' bg-gradient-to-l from-[#7E7E7E] to-white rounded-[10px] p-[1px]'>
                  <div className='w-[180px] h-[55px] text-gray-600 flex justify-center items-center text-[18px] font-medium p-[1px] bg-white z-10 rounded-[11px]'>
                    Quote Summary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-3/4 flex flex-col z-10'>
          <h1 className='text-3xl font-bold text-gray mb-6 pl-28'>Car</h1>
          <div className='bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px] mx-20'>
            <div className='p-[30px] bg-white z-10 rounded-[11px]'>
              <h1 className='text-2xl font-medium text-gray-800 mb-2'>
                You are looking for a car insurance for...
              </h1>
              <p className='text-gray-600 mb-4'>
                Fill the questionnaire to get your personalized car insurance
                quote.
              </p>
              <div className='mb-6'>
                <label
                  htmlFor='car-brand'
                  className='block text-gray-700 font-bold pb-4'>
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
                <h2 className='text-[#1A45D6] font-bold mb-4'>
                  Popular Brands
                </h2>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-6 lg:grid-cols-5 lg:gap-8'>
                  {brands.map((brand) => (
                    <div
                    key={brand.name}
                    className={`w-[150px] h-[100px] rounded-[10px] p-[1px] flex items-center justify-center ${
                      selectedBrand === brand.name
                        ? 'bg-gradient-to-b from-[#96aeff] to-white'
                        : 'bg-gradient-to-b from-[#1A45D6] to-white'
                    }`}
                  >
                    <button
                      onClick={() => handleBrandClick(brand)}
                      className={`flex flex-col items-center justify-center w-full h-full p-[1px] rounded-[11px] ${
                        selectedBrand === brand.name
                          ? 'bg-gradient-to-b from-[#96aeff] to-white'
                          : 'bg-white hover:bg-gradient-to-b hover:from-[#96aeff] hover:to-white'
                      }`}
                    >
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
            <div className='bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px] mx-20 mt-16'>
              <div className='p-[20px] bg-white z-10 rounded-[11px]'>
                <div className='p-[10px] bg-white z-10 rounded-[11px]'>
                  <h1 className='text-2xl font-medium text-gray-800 mb-2'>
                    Select the modal of the car
                  </h1>
                  <p className='text-gray-600 mb-4'>Need help ?</p>

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
                  <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 pt-4'>
                    {carModels.map((model, index) => (
                      <div
                        key={index}
                        className='p-[1px] rounded-lg bg-gradient-to-b from-[rgba(26,69,214,0.6)] to-[#1A45D6]'>
                        <div className='bg-white text-center rounded-lg p-2'>
                          {model}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='min-h-screen bg-white flex flex-col pt-10'>
                    <div className='w-full max-w-md space-y-14'>
                      {/* Dropdown Section */}
                      <div>
                        <label htmlFor='year' className='text-[10px]'>
                          Need Help ?
                        </label>
                        <div className='relative pt-6'>
                          <select
                            id='year'
                            className='w-full max-w-[250px] border border-[#1A45D6] rounded-lg px-4 py-2 text-[#13519C] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
                            style={{
                              backgroundImage: `url(${vectorarrow.src})`,
                              backgroundPosition: 'right 10px center',
                              backgroundRepeat: 'no-repeat',
                            }}>
                            <option>2022 / 2566</option>
                            <option>2023 / 2566</option>
                            <option>2024 / 2566</option>
                            <option>2025 / 2566</option>
                          </select>
                        </div>
                      </div>

                      {/* Engine Size Section */}
                      <div>
                        <label
                          htmlFor='engine-size'
                          className='block text-2xl font-medium text-gray-800 mb-2'>
                          What is the engine size ?
                        </label>
                        <h6 className='text-[10px] pb-6'>Need Help ?</h6>
                        <div className='relative'>
                          <select
                            id='engine-size'
                            className='w-full max-w-[250px] border border-[#1A45D6] rounded-lg px-4 py-2 text-[#13519C] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
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
                          className='block text-2xl font-medium text-gray-800 mb-2'>
                          What is the Sum Insured ?
                        </label>
                        <h6 className='text-[10px] pb-6'>Need Help ?</h6>
                        <div className='relative'>
                          <select
                            id='sum-insured'
                            className='w-full max-w-[250px] border border-[#1A45D6] rounded-lg px-4 py-2 text-[#13519C] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
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
                      <div className='overflow-hidden w-[180px] h-10 flex pl-7 items-center self-start rounded-xl text-[11px] text-white font-semibold bg-[#2263D5] relative mt-5 cursor-pointer'>
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
