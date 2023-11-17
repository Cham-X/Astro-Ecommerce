import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <section className='px-10 py-4'>
      <div className="display-flex-col">
        <p className='p-text font-[600]'>Thank you!</p>
        <h2 className='font-NatoSans font-[600] leading-10 text-3xl text-dark'>Order shipped!</h2>
        <p className='p-text'>Your order #1324 has been sent and will arrive soon.</p>
      </div>
      <div className="flex w-full flex-col gap-1 py-4">
        <div className="display-flex-col">
          <p className='p-text'>Tracking number</p>
          <p className='font-NatoSans font-[600] text-lg text-dark'>8976785568756</p>
        </div>
        <div className="flex gap-4 box ">
          <div>
            <Image
              src="/asset/Screenshot 2022-07-08 at 18.07 1.png"
              alt='product-image'
              width={150}
              height={300}
              className='rounded-md object-contain'
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className='flex flex-col gap-2'>
              <p className='info-text-black'>sofa</p>
              <p className='p-text'>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.</p>
            </div>
            <div className="flex gap-4 ">
              <p className='p-text'>Quantity : <span className='text-dark'>1</span></p>
              <p className='p-text'>Price : <span className='text-dark'>$358</span></p>
            </div>
          </div>
        </div>
        <div className="flex items-baseline justify-center gap-4 ">
          <div className="display-flex-col min-w-[60%] ">
            <div className="box flex-justify-between">
              <div>
                <h3 className='info-text-black'>Shipping address</h3>
                <p className='p-text'>362 Ridgewood Dr, <br />
                  Soldotna, Alaska 99669, USA</p>
              </div>
              <div>
                <h3 className='info-text-black'>Billing address</h3>
                <p className='p-text'>362 Ridgewood Dr,<br />
                  Soldotna, Alaska 99669, USA</p>
              </div>
            </div>
            <div className="box flex-justify-between">
              <div>
                <h3 className='info-text-black'>Payment method</h3>
                <div className='flex items-start justify-center gap-4'>
                <Image
                  src="/asset/visa.png"
                  alt='visa'
                  width={35}
                  height={20}
                />
                <p className='p-text'>Visa 1234<br />
                Expiry 06/2026</p>
                </div>
              </div>
              <div>
                <h3 className='info-text-black'>Shipping method</h3>
                <p className='p-text'>Best Courier <br />
                  Between 1-2 working days</p>
              </div>
            </div>
          </div>
          <div className="box min-w-[40%]">
            <div className=' flex-col flex-justify-between items-start w-full gap-4 self-stretch '>
              <div className=" items-start w-full flex-justify-between">
                <p className='p-text'>Subtotal</p>
                <p className='p-text'>$580</p>
              </div>
              <div className=" items-start w-full flex-justify-between">
                <p className='p-text'>Shipping estimate</p>
                <p className='p-text'>$50</p>
              </div>
              <div className=" items-start w-full flex-justify-between">
                <p className='p-text'>Tax estimate</p>
                <p className='p-text'>$00</p>
              </div>
              <div className='horizontal-line'></div>  
              <div className='w-full'>
                <div className=" items-start w-full flex-justify-between py-4">
                  <p className='info-text-black'>Order Total</p>
                  <p className='info-text-black'>$1,560</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
