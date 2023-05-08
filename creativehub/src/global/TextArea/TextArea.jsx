import React from 'react'

function TextArea({
    placeholder, 
    rows, 
    id, 
    className, 
    classNameTextArea,
    name,
    value,
    onChange}) {
  return (
    <div className={`max-w-md ${className && className}`}>
      <textarea 
        className={`${classNameTextArea && classNameTextArea} py-3 px-4 block w-full rounded-md text-sm border-2 bg-white `}
        rows={rows} 
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}>
    </textarea>
    </div>
  )
}

export default TextArea
