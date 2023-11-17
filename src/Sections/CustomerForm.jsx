import React from 'react'
import CustomerInputs from '@/components/CustomerInputs'
import Button from '@/components/Button'
import Link from 'next/link'

import Image from 'next/image'

const CustomerForm = () => {
  return (
    <form className='flex flex-col gap-4 min-w-[70%]'>
      <button className="border w-full border-gray-400 p-2 rounded-md flex items-center justify-center  gap-2">
        <Image src="/asset/Logos-1.png" alt="logo" width={20} height={20} />
        <p className='text-dark font-NotoSans leading-[20.8px] font-[600]'
        >Apple Pay</p>
      </button>
      <div className='flex justify-center items-center  w-full my-8  '>
        <div className='horizontal-line'></div>
        <p className='font-NatoSans font-[600] text-lg text-secondary'>or</p>
        <div className='horizontal-line'></div>
      </div>
      <CustomerInputs
        label={"Email Address"}
        placeholder={"Enter your email address"}
      />
      <CustomerInputs
        label={"Name on card"}
        placeholder={"Enter the cardholder’s name "}
      />
      <CustomerInputs
        label={"Card Number"}
        placeholder={"Enter your card number"}
      />
      <div className='flex justify-between items-center w-full'>
        <CustomerInputs
          label={"Expiration date"}
          placeholder={"Enter the date"}
          inputLength={"w-1/2"}
          />
        <CustomerInputs
          label={"CVV"}
          placeholder={"Enter the three digits"}
          inputLength={"w-1/2"}
          />
      </div>
      <CustomerInputs
        label={"Address"}
        placeholder={"Street, no"}
      />
      <div className='flex items-center justify-between w-full'>
        <CustomerInputs
          label={"City"}
          placeholder={"Enter city"}
        />
        <CustomerInputs
          label={"Country"}
          placeholder={"Enter your country"}
        />
        <CustomerInputs
          label={"Postal code"}
          placeholder={"Postal code"}
        />
      </div>
      <div className='flex gap-4 py-2'>
        <input type="checkbox" id="billing" name="billing" value="billing" className='w-8 h-8 checked:bg-bg-dark ' />
        <label className='font-NotoSans text-xs px-4'>Billing address the same as shipping address</label>
      </div>
      <div className='py-2'>
        <Link href="/order">
          <Button
            buttonText={"Pay $1,560"}
          />
        </Link>
      </div>
    </form>
  )
}

export default CustomerForm
