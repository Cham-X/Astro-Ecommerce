import React from 'react'
import Image from 'next/image'

export default function OrderPageNavbar() {
  return (
      <nav className='bg-dark flex items-center justify-between py-4 border-b  px-10 '>
          <div className='flex items-center gap-4'>
              <button className='info-text-100'>Furniture</button>
              <button className='info-text-100'>Designers</button>
              <button className='info-text-100'>Categories</button>
          </div>
          <div  className='flex gap-3 font-[600]  text-[#94A3B8] bg-[#404752] border-none px-2 py-1 rounded-md'>
              <Image
                  src="/asset/search-svg.svg"
                  alt='search'
                  width={20}
                  height={20}
                  className='text-[#94A3B8] '
              />
              <input
                  type="text"
                  className='bg-inherit outline-none '
                  placeholder='Search'
              />
          </div>
    </nav>
  )
}
