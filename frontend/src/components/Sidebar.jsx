import React from 'react'
import { IoMdClose } from "react-icons/io";
import { BiWindows } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import Link from 'next/link';

function Sidebar({close}) {
    

    return (
      <div className="absolute right-0 h-screen w-1/5 bg-black z-30 px-12 py-6">
        <div className="flex w-full justify-end">
          <IoMdClose onClick={close} />
        </div>
        <div className="flex flex-col justify-between mt-12">
          <div className="flex flex-col gap-6">
            <Link className="flex items-center justify-start gap-4" href="/">
              <TiHome className='size-6' />
              <p className='text-xl'>Home</p>
            </Link>
            <Link className="flex items-center justify-start gap-4" href="/">
              <BiWindows className='size-6' />
              <p className='text-xl'>Owned Courses</p>
            </Link>
            <Link className="flex items-center justify-start gap-4" href="/">
              <FaUser className='size-6' />
              <p className='text-xl'>My Profile</p>
            </Link>
            <Link className="flex items-center justify-start gap-4" href="/">
              <IoCart className='size-6' />
              <p className='text-xl'>Cart</p>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Sidebar