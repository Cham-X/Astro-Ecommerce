import React from 'react'

const Button = ({buttonText}) => {
  return (
      <button className={`w-full bg-dark  leading-[20.8px]  p-2 rounded-md info-text`}>
        { buttonText }
   </button>
  )
}

export default Button
