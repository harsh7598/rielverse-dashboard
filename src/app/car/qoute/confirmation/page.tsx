'use client';

import { Header } from '@/components';
import Image from 'next/image';
import React, { useState } from 'react';
import righthead from '../../../../../public/Icons/Reilverse_Assets/bg_right.svg';
import vectorarrow from '../../../../../public/Icons/Reilverse_Assets/Vectorarrow.svg';
import vectorright from '../../../../../public/Icons/Reilverse_Assets/vectorright.svg';
import CarFooter from '@/components/footer/CarFooter';
import insurance from '../../../../../public/Icons/Reilverse_Assets/forte.png';
import { FileUp } from 'lucide-react';
import closeIcon from '../../../../../public/Icons/Reilverse_Assets/closeIcon.svg';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { coustomerDetails, vehicleRisk } from '@/utils/constants';
import { title } from 'process';

const ConfirmationPage = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);

  const sumInsured = 10000;
  const vehicleDetails = [
    { title: 'Make', value: vehicleRisk.Make },
    { title: 'Model', value: vehicleRisk.Model },
    { title: 'Manufacture Date', value: vehicleRisk.ManufactureDate },
    { title: 'Chassis No', value: vehicleRisk.ChassisNo },
    { title: 'Engine No', value: vehicleRisk.EngineNo },
    { title: 'Registration No', value: vehicleRisk.RegistrationNo },
    { title: 'Engine Capacity', value: `${vehicleRisk.EngineCapacity} CC` },
    {
      title: 'Previous Policy NCB',
      value: `${vehicleRisk.PrevInsuranceList[0]?.PrevPolicyNCB || 0}%`,
    },
    { title: 'Sum Insured', value: `$${sumInsured}` },
  ];

  const { startDate, quoteNo, name, address, occupation, scope } = coustomerDetails;

  return (
    <div className='w-full bg-gradient-to-b from-[#BCCEE4] to-transparent h-96 to bg-white'>
      <Image
        className='absolute right-0 top-0'
        src={righthead}
        alt='righthead'
      />
      <Header />
      <div className='w-full h-auto max-w-[1300px] px-8 flex flex-col md:flex-row gap-4 mx-auto pt-20 md:pt-40'>
        {/* Left Section - Form */}
        <div className='w-full md:w-3/4 bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px] flex flex-col '>
          <div className='bg-white z-10 rounded-[11px] p-6 md:p-12'>
            <div className='flex flex-col gap-2 mb-10'>
              <h2 className='text-[24px] font-bold'>Confirmation</h2>
              <p className='text-gray-700 text-[14px]'>
                Our insurance consultant will call you to confirm the order
                after it has been submitted.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {[
                { label: 'Full Name', placeholder: 'Name', type: 'text' },
                { label: 'Email ID', placeholder: 'ID', type: 'email' },
                { label: 'Mobile No', placeholder: 'Phone', type: 'tel' },
                {
                  label: 'Manufacture Date',
                  placeholder: 'Date',
                  type: 'date',
                },
              ].map((field, idx) => (
                <div key={idx} className='flex flex-col'>
                  <label className='font-semibold text-[16px] pb-1'>
                    {field.label}
                  </label>
                  <p className='text-[10px] pb-1'>Need Help ?</p>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                  />
                </div>
              ))}

              <div className='col-span-1 md:col-span-2 flex flex-col'>
                <label className='font-semibold text-[16px] pb-1'>
                  Address
                </label>
                <p className='text-[10px] pb-1'>Need Help ?</p>
                <input
                  type='text'
                  placeholder='Address'
                  className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                />
              </div>

              <div className='flex flex-col'>
                <label className='font-semibold text-[16px] pb-1'>
                  Policy Start Date?
                </label>
                <p className='text-[10px] pb-1'>Need Help ?</p>
                <input
                  type='date'
                  className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                />
              </div>

              <div className='flex flex-col'>
                <label className='font-semibold text-[16px] pb-1'>
                  Years of Driving
                </label>
                <p className='text-[10px] pb-1'>Need Help ?</p>
                <div className='relative'>
                  <select
                    className='w-[110px] appearance-none border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none w-full'
                    style={{
                      backgroundImage: `url(${vectorarrow.src})`,
                      backgroundPosition: 'right 10px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '15px',
                    }}>
                    {[...Array(30)].map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {[
                { label: 'Registration No.', placeholder: 'TEMP' },
                { label: 'Chassis No.', placeholder: 'MM7DK2W7ARW703387' },
                { label: 'Engine No.', placeholder: 'PE20370009' },
              ].map((field, idx) => (
                <div key={idx} className='flex flex-col'>
                  <label className='font-semibold text-[16px] pb-1'>
                    {field.label}
                  </label>
                  <p className='text-[10px] pb-1'>Need Help ?</p>
                  <input
                    type='text'
                    placeholder={field.placeholder}
                    className='border border-blue-600 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Summary */}
        <div className='w-full md:w-1/4 z-10 h-fit bg-gradient-to-b from-[#1A45D6] to-white rounded-[10px] p-[1px]'>
          <div className='bg-white z-10 rounded-[11px] p-4 md:p-8'>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-3'>
                <h3 className='text-[16px] font-semibold'>Policy Details</h3>
                <h3 className='text-[16px] font-semibold text-[#102770]'>
                  Comprehensive
                </h3>
              </div>
              <div className='flex items-center justify-center'>
                <span className='font-semibold text-2xl'>$300</span>
              </div>
            </div>
            <div className='border-2 border-dashed mt-2'></div>
            <div className='pt-4'>
              <div className='flex justify-between pb-[100px]'>
                <p className='text-[14px]'>Comprehensive</p>
                <p className='text-[14px]'>$300</p>
              </div>
            </div>
            <div className='border-2 border-dashed mt-2'></div>
            <div className='pt-4 flex flex-col gap-4 pb-6'>
              <div className='flex justify-between'>
                <p className='text-[14px]'>Sub-total</p>
                <p className='text-[14px]'>$300</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-[14px]'>+ Admin Fee</p>
                <p className='text-[14px]'>$1</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between text-lg font-bold'>
                <span className='text-[#343434]'>Final Price</span>
                <span className='text-[#102770]'>$301</span>
              </div>
              <p className='text-xs text-gray-500 mt-2'>
                By continuing, you agree to our{' '}
                <a href='#' className='text-blue-500 underline'>
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href='#' className='text-blue-500 underline'>
                  T&C
                </a>
                .
              </p>
              <div className='flex flex-col gap-2'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className='flex items-center justify-between w-[175px] h-[40px] px-4 py-2 bg-[#13519C] text-white text-[12px] rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
                      style={{
                        backgroundImage: `url(${vectorright.src})`,
                        backgroundPosition: 'right 10px center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '16px',
                      }}>
                      Confirm and pay
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='flex  font-[Arboria-Medium] md:flex-nowrap flex-wrap bg-[#FFFFFF] max-w-[1200px] h-[700px] rounded flex-col'>
                    <DialogHeader>
                      <DialogTitle>
                        <div className='flex w-[1144px] h-[77px] justify-between mx-7 items-center'>
                          <div
                            className={
                              'w-[200px] h-[77px] rounded-b-xl bg-gradient-to-t from-[#13519C] to-transparent p-[1.5px]'
                            }>
                            <div
                              className={
                                'flex items-center w-full h-full rounded-b-xl bg-white overflow-hidden'
                              }>
                              <Image
                                src={insurance}
                                alt='forteimage'
                                className={'w-11/12'}
                              />
                            </div>
                          </div>
                          {/* <img
                  src={closeIcon}
                  alt=""
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => setValidate(false)}
                /> */}
                        </div>
                      </DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div className='flex justify-between mx-7 my-8 '>
                      <div className='flex flex-col text-left gap-2'>
                        <span className='text-lg font-semibold'>
                          PERIOD OF INSURANCE :
                        </span>
                        <span className='text-lg font-semibold text-[#13519C]'>
                          {startDate}
                        </span>
                      </div>
                      <div className='flex flex-col text-right justify-end gap-2'>
                        <span className='text-lg font-semibold'>
                          Quote No :{''}
                          <span className='text-[#13519C]'>{quoteNo}</span>{' '}
                        </span>
                        <button className='w-[136px] h-8 rounded-md border border-[#13519C] text-[#13519C] flex items-center ml-[80px]  '>
                          <FileUp className='w-4 h-4 mx-2' />
                          Share Quote
                        </button>
                      </div>
                    </div>
                    <div className='flex flex-col justify-start font-semibold text-lg w-[600px] mx-7 text-left gap-5'>
                      <div className='flex '>
                        <span className='w-[170px]'>INSURED NAME :</span>
                        <span className='text-[#13519c]'>{name}</span>
                      </div>
                      <div className='flex '>
                        <span className='w-[170px]'>ADDRESS:</span>
                        <span className='text-[#13519c] text-left'>
                          {address}
                        </span>
                      </div>
                      <div className='flex'>
                        <span className='w-[170px]'>OCCUPATION :</span>
                        <span className='text-[#13519c]'>{occupation}</span>
                      </div>
                      <div className='flex'>
                        <span className='w-[170px]'>SCOPE OF COVER : </span>
                        <span className='text-[#13519c]'>{scope}</span>
                      </div>
                      <span className='w-[170px] font-semibold text-lg'>
                        VEHICLE(S) :
                      </span>
                    </div>
                    <div
                      className={
                        'w-full min-[1800px]:max-w-[1140px] max-w-[1144px] px-[3px] pt-[3px] rounded-xl h-auto bg-gradient-to-t from-transparent to-[#13519C]  max-[800px]:mt-6 mx-7 my-2  '
                      }>
                      <div
                        className={
                          'w-full min-[1800px]:max-w-[1140px] max-w-[1144px] h-auto bg-white flex max-[650px]:flex-col max-[650px]:items-center max-[650px]:gap-3 items-start max-[800px]:pt-3 pt-6 rounded-xl'
                        }>
                        {vehicleDetails.map((item, index) => (
                          <div
                            key={index}
                            className='w-1/8 max-[650px]:w-full h-[100px] flex items-center mx-1 text-lg'>
                            <div className='w-full p-2 h-auto flex flex-col justify-center font-semibold'>
                              <span>{item.title}</span>
                              <span className='max-[800px]:text-lg text-[#13519C] font-[400] mt-2'>
                                {item.value}
                              </span>
                            </div>
                            {index !== vehicleDetails.length - 1 && (
                              <div className='w-0.5 max-[650px]:hidden h-[100px] bg-gradient-to-b from-[#13519C] to-transparent mx-2'></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type='submit'>Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <p className='text-[10px]'>Get your policy online instantly!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarFooter />
    </div>
  );
};

export default ConfirmationPage;
