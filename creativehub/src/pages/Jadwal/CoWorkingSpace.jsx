import React from 'react'
import Navbar from '../../global/Navbar/Navbar'
import Footer from '../../global/Footer/Footer'
import SideNav from '../../global/SideNav/SideNav'
import Calendar from '../../global/Calendar/Calendar'

function CoWorkingSpace() {
  return (
    <div className='bg-[#FAFAFF]'>
      <Navbar/>
      <div className="row flex flex-wrap border-l-indigo-500">
        <SideNav/>
        <Calendar label={'Jadwal Co-Working Space'}/>
        </div>
      <Footer/>
    </div>
  )
}

export default CoWorkingSpace
