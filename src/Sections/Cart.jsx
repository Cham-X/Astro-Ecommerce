import React from 'react'
import ProductItem from '@/components/ProductItem'
import CustomerInputs from '@/components/CustomerInputs'

const products = [
  {
    id: 1,
    name: 'Premium Suit',
    price: 790,
    material: 'Wool',
    imageUrl: "/asset/graysuit.png",
    size: 'M',
  },
  {
    id: 2,
    name: 'Linen Suit',
    price: 790,
    material: 'Linen',
    imageUrl: "/asset/blacksuit.png",
    size: 'XL',
  }
]
const Cart = () => {
  return (
    <section className=' flex flex-col gap-8 w-[90%]'>
      <div className="flex flex-col gap-4 items-start justify-center">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            material={product.material}
            size={product.size}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex flex-col gap-8 w-full justify-between  items-start">
        <div className='flex items-center w-full gap-2'>
          <CustomerInputs
            labelColor={"text-white-100"}
            label={"Discount"}
            inputLength={"w-[20rem]"}
          />
          <p className='info-text-100 mt-4'>Apply</p>
        </div>
        <div className='flex flex-col justify-between items-start w-full gap-8'>
          <div className='flex flex-col justify-between items-start w-full gap-2' >
            <div className="flex items-start w-full justify-between">
              <p className='info-text-100'>Subtotal</p>
              <p className='info-text-100'>$580</p>
            </div>
            <div className="flex items-start w-full justify-between">
              <p className='info-text-100'>Discount  <span><button className='px-2 py-[2px] ml-[1rem] text-[0.3rem] button-bg hover:bg-dark'>Getlucky</button></span></p>
              <p className='info-text-100'>-$30</p>
            </div>
            <div className="flex items-start w-full justify-between">
              <p className='info-text-100'>Tax estimate</p>
              <p className='info-text-100'>$0</p>
            </div>
            <div className="flex items-start w-full justify-between">
              <p className='info-text-100'>Shipping estimate</p>
              <p className='info-text-100'>$10</p>
            </div>
          </div>
          {/* <div className='w-full'> */}
            <div className="flex items-start w-full justify-between ">
              <p className='info-text'>Order Total</p>
              <p className='info-text'>$1,560</p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}



export default Cart
