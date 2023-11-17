import Image from 'next/image'
import React from 'react'

const ProductItem = ({ imageUrl, name, material, size, price }) => {
  return (
    <>
      <div className='flex items-start justify-center gap-4 h-[11.1rem]'>
        <div>
          <Image
            src={imageUrl}
            alt={name}
            width={200}
            height={200}
            className="object-contain rounded-md w-auto h-auto"          />
        </div>
        <div className="flex flex-col items-start justify-between h-full">
          <h3 className='info-text'>{name}</h3>
          <h3 className='info-text'>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
          <p className='info-text-100'>{material}</p>
          <p className='info-text-100'>Size : {size}</p>
          <div className='flex gap-3 info-text-100'>
            <button className='px-3 py-1 button-bg hover:bg-dark'>
              Edit
            </button>
            <button className='hover:button-bg px-3'>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className='horizontal-line '>
      </div>
    </>
  )
}

export default ProductItem
