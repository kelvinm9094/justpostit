import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { HiBell, HiChat } from 'react-icons/hi';

function Header() {
  return (
    <div className='flex items-center justify-between p-1'>
      {/* Left Section */}
      <div className='flex items-center gap-6'>
        <Image
          src="/logo1.png"
          alt="logo"
          width={75}
          height={75}
          className='hover:bg-green-50 p-2 rounded-full cursor-pointer'
        />
        <button className='bg-black text-white p-2 px-4 rounded-full'>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
      </div>

      {/* Center Section */}
      <div className='flex items-center bg-[#e9e9e9] p-3 gap-3 rounded-full flex-grow max-w-xl'>
        <FaSearch className='text-[25px] text-gray-500' />
        <input
          type="text"
          placeholder="Search"
          className='bg-transparent outline-none w-full'
        />
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        <HiBell className='text-[25px] p-30 text-gray-500 cursor-pointer' />
        <HiChat className='text-[25px] p-30 text-gray-500 cursor-pointer' />
        <Image
          src="/userimage.png"
          alt="user"
          width={50}
          height={50}
          className='hover:bg-green-50 p-2 rounded-full cursor-pointer'
        />
      </div>
    </div>
  );
}

export default Header;
