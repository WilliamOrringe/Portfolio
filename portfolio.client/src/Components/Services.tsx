import React from 'react';
import { Link } from 'react-router-dom';
import commercial from '../assets/Commercial-property-office-trees-scaled.jpg';
import residential from '../assets/depositphotos_116931276-stock-photo-traditional-british-brick-houses-on.jpg';
const Services = () => {
  return (
    <div className='text-center gap-5 flex flex-col items-center'>
      <h1 className='text-[40px] font-bold leading-[48px] text-center'>
        Our Services
      </h1>
      <h2>
        Check out our comprehensive surveying services.
      </h2>
      <div className='justify-center flex flex-row gap-[12px]'>
        <Link
          to='/contact'
          className='p-[12px] w-[160px] h-[48px] rounded-lg border border-1 border-black'
        >
          Contact Us
        </Link>

        <Link
          to='/contact'
          className='p-[12px] w-[160px] h-[48px] rounded-lg bg-accent-dark'
        >
          Learn More
        </Link>
      </div>
      <div className='justify-center flex-row flex gap-[40px] max-w-[70vw] mt-[30px]'>
        <div className='flex flex-col border-1 border border-black/20 gap-2 pb-2 rounded-md'>
          <img src={commercial} className='rounded-t-md' />
          <h2> Commercial</h2>
          <h3></h3>
        </div>
        <div className='flex flex-col min-w-[236px] border-1 border border-black/20 gap-2 pb-2 rounded-md'>
          <img src={residential} className='rounded-t-md' />

          <h2> Residential</h2>
        </div>
        <div className='flex flex-col border-1 border border-black/20 gap-2 pb-2 rounded-md'>
          <img src={commercial} className='rounded-t-md' />

          <h2> Residential</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
