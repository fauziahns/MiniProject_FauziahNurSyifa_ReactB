import React from 'react'

function Button({label, linkButton, className}) {
  return (
    <div 
      className={`rounded-full focus:outline-none focus:ring-4 w-[130px] text-center focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 ${className && className}`}  >
      <a href={linkButton}>{label}</a>
    </div>
  )
}

export default Button
