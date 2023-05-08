import React from 'react'

function FileInput({
  label, 
  id, 
  placeholder,
  className,
  classNameInput, 
  value, 
  name, 
  onChange}){
  return (
    <div className={` max-w-md ${className && className}`}>
      <label htmlFor="">{label}</label>
      <input 
        type="text" 
        className={`${classNameInput && classNameInput} py-3 px-4 block border-2 w-full bg-white rounded-md text-sm `} 
        placeholder={placeholder}
        id={id}
        value={value}
        name={name}
        onChange={onChange}>
      </input>
    </div>
  )
}

export default FileInput
