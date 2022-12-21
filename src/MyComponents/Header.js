

import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

export const Header = () => {

  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <nav className="border-b border-gray-700 bg-nav ">
      <div className='flex items-center justify-between max-w-[1150px] mx-auto px-3 '>

        <div className='flex tracking-widest py-3 cursor-pointer'>
          <h2 className='text-xs font-medium text-gray-100 font-Oxygen'>Muhammad Ali</h2>
        </div>


        <div className='flex tracking-wide py-3 cursor-pointer'>
          <ul className='flex text-xs items-center font-normal text-gray-200'>
            <li className='ml-4 mx-1 hover:text-gray-400'>Home</li>
            <li className='hidden lg:flex ml-4 mr-1 hover:text-gray-400'>Education</li>
            <li className='hidden lg:flex ml-4 hover:text-gray-400'>Research</li>
            <li className='hidden lg:flex ml-4 mx-1 hover:text-gray-400'>Work</li>
            <li className='hidden lg:flex ml-4 hover:text-gray-400'>Projects</li>
            <li className='hidden lg:flex ml-4 hover:text-gray-400'>Skills</li>
            <li className='hidden lg:flex ml-4 hover:text-gray-400'>Leadership</li>
            <li className='hidden md:flex ml-4 hover:text-gray-400'>Courses</li>
            <li className='hidden lg:flex ml-4 hover:text-gray-400'>Gallery</li>
            <li className='ml-4 hover:text-gray-400'>Contact</li>
          </ul>

          <div onClick={handleNav} className="ml-4 block lg:hidden">
            <AiOutlineMenu size={20} className='fill-gray-200 hover:fill-gray-400' />

          </div>
        </div>
      </div>
      <div className={!nav ? 'fixed right-1 mt-1 w-[40%] text-s tracking-wider cursor-pointer h-30 font-normal' : 'hidden'}>
        <ul className='cursor-pointer rounded-md text-gray-100 border border-gray-900 bg-[#212121]'>
          <li className='pb-2 pt-4 mx-4 hover:text-gray-300'>Home</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Education</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Research</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Work</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Projects</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Skills</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Leadership</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Courses</li>
          <li className='py-2 mx-4 hover:text-gray-300'>Gallery</li>
          <li className='pt-2 pb-4 mx-4 hover:text-gray-300'>Contact</li>
        </ul>
      </div>
    </nav>
  )

}


