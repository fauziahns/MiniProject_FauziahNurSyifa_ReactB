import React from 'react'
import Navbar from '../../global/Navbar/Navbar'
import Footer from '../../global/Footer/Footer'
import SideNav from '../../global/SideNav/SideNav'
import Calendar from '../../global/Calendar/Calendar'

function StudioTari() {
  return (
    <div className='bg-[#FAFAFF]'>
      <Navbar/>
      <div className="row flex border-l-indigo-500">
        <SideNav/>
        <Calendar label={'Jadwal Studio Tari'}/>
        </div>
      <Footer/>
    </div>
  )
}

export default StudioTari
