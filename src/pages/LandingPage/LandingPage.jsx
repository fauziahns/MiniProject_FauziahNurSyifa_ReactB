import React from 'react'
import Navbar from '../../global/Navbar/Navbar'
import Hero from '../../global/Hero/Hero'
import Button from '../../global/Button/Button'
import Footer from '../../global/Footer/Footer'
import sectionOne from '../../assets/rk-sectionone.png'
import photoRuangan1 from '../../assets/photo-ruangan1.png'
import photoRuangan2 from '../../assets/photo-ruangan2.png'
import photoRuangan3 from '../../assets/photo-ruangan3.png'
import photoRuangan4 from '../../assets/photo-ruangan4.png'
import imageTwo from '../../assets/image2.png'
import dokumentai1 from '../../assets/dokumentasi1.png'
import dokumentai2 from '../../assets/dokumentasi2.png'
import dokumentai3 from '../../assets/dokumentasi3.png'
import dokumentai4 from '../../assets/dokumentasi4.png'
import dokumentai5 from '../../assets/dokumentasi5.png'

function LandingPage() {
  return (
    <div className='bg-gradient-to-br from-cyan-50 to-yellow-50 font-[Montserrat] '>
      <Navbar className={'fixed'}/>
      <Hero/>
      <div className="section text-black text-sm leading-loose text-justify pt-[120px]">
        <div className="row flex justify-center">
          <div className="w-[900px]">
            <p>
                <a className='font-bold'>Gedung Bandung Creative Hub</a> yang berada di Jalan Laswi No. 7 Kota Bandung telah diresmikan oleh Wali Kota Bandung M. Ridwan Kamil dan Wakil Wali Kota Bandung Oded M. Danial, Kamis (28/12/2017). Bangunan setinggi enam lantai tersebut akan menjadi surga bagi para insan kreatif di Kota Bandung.
            </p>
          </div>
        </div>
      </div>
      <div className="section-photo">
        <div className="row flex justify-center">
          <div className="w-[900px]">
            <img src={sectionOne} alt="ridwankamil" className='py-8' />
          </div>
        </div>
      </div>
      <div className="section text-black text-sm leading-loose text-justify pb-[80px]">
        <div className="row flex justify-center">
          <div className="w-[900px]">
          <p>Gedung warna warni berarsitektur unik ini dirancang untuk menjadi wadah untuk mengembangkan kreativitas, edukasi, dan laboratorium untuk berbagai sektor industri kreatif. Bangunan ini menyediakan sarana dan fasilitas lengkap agar anak-anak muda Bandung semakin semangat untuk berkreasi.
            “Visi misi dari saya dan Mang Oded dulu ingin membawa Bandung menjadi kota kreatif dunia. Caranya adalah memfasilitasi ruangan, fasilitas teknologi yang biasanya sangat mahal dan tidak mudah,” -Ridwan Kamil</p>
          </div>
        </div>
      </div>
      <div className="section-two py-[20px]">
        <h1 className='text-black font-bold text-[30px] ps-[120px] py-[50px]'>Ruangan di <a className='text-[#4750BF]'> Creative</a> Hub Bandung</h1>
          <div className="row flex gap-5 justify-center pb-[150px]">
            <img src={photoRuangan1} alt="" className='rounded hover:scale-90 ease-in duration-500' />
            <img src={photoRuangan2} alt="" className='rounded hover:scale-90 ease-in duration-500' />
            <img src={photoRuangan3} alt="" className='rounded hover:scale-90 ease-in duration-500' />
            <img src={photoRuangan4} alt="" className='rounded hover:scale-90 ease-in duration-500' />
          </div>
      </div>
      <div class="flex text-black justify-center gap-36 leading-loose pb-[100px]">
        <div class="flex-initial w-46 font-bold">
          <h2 className='text-[25px] pb-[30px]'>Persyaratan Peminjaman <br/>
          Ruangan <a className='text-[#D2C230]'>Crative</a> Hub <br/>
          Bandung</h2>
          <Button className={"bg-[#4750BF] text-white hover:bg-[#414BBE]"} label={"Read More"}/>
        </div>
        <div class="flex-initial w-[500px] text-justify">
          1. Penanggung jawab ber-KTP Kota Bandung <br/>
          2. Kegiatan yang diajukan harus berkaitan dengan 17 subsektor ekonomi kreatif <br/>
          3. Input proposal kegiatan berisi: deskripsi, jumlah peserta, tanggal dan jam kegiatan, lampiran foto minimal 30 hari sebelum pelaksanaan kegiatan <br/>
          4. Mengisi surat pernyataan
        </div>
      </div>
      <div className="section-four grid justify-items-center pb-[100px]">
        <div className="content-photo flex bg-[#656DC6] rounded-lg w-[900px] p-5">
          <div className="left-content"> 
            <img src={imageTwo}alt="illustration" />
          </div>
          <div className="right-content ps-4">
             <p className='text-[30px] font-bold pt-8 pb-5'>Lihat <a  className='text-[#D2C230]'>Jadwal  </a>Ruangan Creative Hub <br/> yang Tersedia</p>
             <Button className={"bg-[#FCDC48] text-black hover:bg-[#DABF45]"} label={"Jadwal"}/>
          </div>
        </div>
      </div>
      <div className="section-five text-black pb-[150px] pt-[30px]">
        <h2 className='text-center pb-[40px] text-[28px] font-bold'>Dokumentasi Kegiatan</h2>
        <div class="flex flex-row justify-center gap-4">
          <div className='row-one'>
            <div className="col pb-3">
              <img src={dokumentai5} alt="" />
            </div>
            <div className="col-two">
              <img src={dokumentai3} alt="" />
            </div>
          </div>
          <div className='row-two'>
            <div className="col pb-4">
              <img src={dokumentai4} alt="" />
            </div>
            <div className="col-two">
              <img src={dokumentai1} alt="" />
            </div>
          </div>
          <div className='row-three'>
            <div className="col">
              <img src={dokumentai2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
