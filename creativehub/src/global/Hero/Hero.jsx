import React from 'react'

function Hero() {
  return (
    <div className='bg-[#15143D] font-[Montserrat] text-white px-10 py-[100px]'>
      <div className="warapper flex">
        <div className="hero-title">
            <h1 className='font-bold text-6xl'>Bandung <br/> Creative Hub</h1>
            <p className='w-60 pt-5'>Lorem ipsum dolor sit amet consectetur. Quisque semper ultrices facilisis 
            a tempor fusce volutpat amet. Mollis elementum id lorem ultrices ut nec
            mattis mollis diam.</p>
        </div>
        <div className="hero-image">
            <img src="\src\assets\image1.png" alt="hero-image" />
        </div>
        </div>  
    </div>
  )
}

export default Hero
