import React from 'react'

function Navbar() {
  return (
    <div className='relative '>
      <div className="nav w-full flex p-3 text-white bg-[#15143D] justify-between font-['Montserrat'] text-sm fixed">
      <div className="img-logo ps-8">
        <img src="\src\assets\logo.png" alt="logocreativehub" className='w-12'/>
      </div>
      <div className="menu flex items-center ">
        <div className="li px-5 hover:text-amber-400 active:text-amber-400"><a href="../pages/Jadwal/Jadwal">Jadwal</a></div>
        <div className="li px-5 hover:text-amber-400 active:text-amber-400"><a href="">Pengajuan</a></div>
        <div className="li px-5 hover:text-amber-400 active:text-amber-400"><a href="">Status Pengajuan</a></div>
      </div>
      <div className="login flex items-center pe-8">
        <a href="" className='text-black p-2 px-4 rounded-md bg-amber-400 hover:bg-amber-500'>Login</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
