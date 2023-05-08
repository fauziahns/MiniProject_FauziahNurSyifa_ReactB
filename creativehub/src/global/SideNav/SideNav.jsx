import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNav() {
  return (
    <div className='text-black flex flex-col p-4 ps-10 gap-4 bg-[#F6F6F6] max-w-[20%]'>
      <h2 className='font-bold bg-[#221D55] p-3 text-white rounded-md'>Lihat Jadwal Ruangan yang Tersedia</h2>
      <NavLink className={'p-2 hover:bg-[#353158] hover:text-white rounded-md'} to="/StudioMusik">Studio Musik</NavLink>
      <NavLink className={'p-2 hover:bg-[#353158] hover:text-white rounded-md'} to="/StudioTari">Studio Tari</NavLink>
      <NavLink className={'p-2 hover:bg-[#353158] hover:text-white rounded-md'} to="/StudioAnimasi">Studio Animasi</NavLink>
      <NavLink className={'p-2 hover:bg-[#353158] hover:text-white rounded-md'} to="/CoWorkingSpace">Co-Working Space</NavLink>
    </div>
  )
}

export default SideNav
