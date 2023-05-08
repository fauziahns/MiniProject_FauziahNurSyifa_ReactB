import React from 'react'

function Button({label, className, onClick,disabled}) {
  return (
    <button
      className={`rounded-full focus:outline-none focus:ring-4 w-[130px] text-center focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 ${className && className}`}
      type='submit'
      id='submit'
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
