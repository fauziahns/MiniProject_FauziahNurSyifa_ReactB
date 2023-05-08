import React from 'react'

function Hero() {
  return (
    <div className=' font-[Montserrat]  text-black px-[65px] py-[50px]'>
      <div className="title leading-none flex justify-between items-end pt-[50px]">
        <div className="right font-bold text-[60px]">
          <h1>Bandung <br/> <a className='text-[#4750BF]'>Creative</a> Hub </h1>
        </div>
        <div className="left text-[#575757] text-[16px] leading-normal">
          <p>Creative Hub Bandung. <br/> Maju bersama insan muda kreatif! </p>
        </div>
      </div>
      <div className="row flex gap-5 my-10 justify-center">
        <div className="col">
          <img src='src\assets\hero-photo3.png' alt="" />
        </div>
        <div className="col">
          <img src='src\assets\hero-photo2.png' alt="" />
        </div>
        <div className="col">
          <img src='src\assets\hero-photo1.png' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
