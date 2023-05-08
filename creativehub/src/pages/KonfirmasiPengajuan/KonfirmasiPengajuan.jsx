import React from 'react'
import Navbar from '../../global/Navbar/Navbar'
import Footer from '../../global/Footer/Footer'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../global/Button/Button'
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { AddData, GetData } from '../../Mutation/Mutation'

function KonfirmasiPengajuan() {
  const {state} = useLocation()
  console.log(state)

 const Navigate = useNavigate()
 const handleSubmit = () => {
  Navigate(`/StatusPengajuan`),
  insertData({
      variables: {
        object: {
          tanggalKegiatan: state.tanggalKegiatan,
          namaIntansi: state.namaIntansi,
          namaKegiatan: state.namaKegiatan,
          ruangan: state.ruangan,
          jamKegiatan: state.jamKegiatan,
          deskripsiKegiatan: state.deskripsiKegiatan,
          ktp: state.ktp,
          suratPengajuan: state.suratPengajuan
        }
      }
    })
  }

 const [insertData] = useMutation(AddData, {
  refetchQueries: [GetData]
  })

  const handleEdit = () => {
    Navigate(`/Pengajuan`, {state} )
  }


  return (
    <div>
      <Navbar/>
      <div className="flex justify-center">
        <div className="border-2 shadow-md text-black p-6 m-10 max-w-lg rounded-md ">
          <div className="title  pb-5">
            <p className='font-bold text-[20px]'>Apakah Form yang Anda Isi Sudah Benar?</p>
            <p className='me-3 text-sm pt-2 text-rose-500'>Pastikan data yang anda inputkan adalah data yang valid!</p>
          </div>
          <div className="wrapper">
              <div className="content text-black flex p-3 text-sm">
                <p className='me-3'>Tanggal Kegiatan : </p> <p className='font-bold'>{state.tanggalKegiatan}</p>
              </div>
              <div className="content text-black flex p-3 text-sm">
                <p className='me-3'>Jam Kegiatan : </p> <p className='font-bold'>{state.jamKegiatan}</p>
              </div>
              <div className="content text-black flex p-3 text-sm">
                <p className='me-3'>Nama Kegiatan : </p> <p className='font-bold'>{state.namaKegiatan}</p>
              </div>
              <div className="content text-black flex p-3 text-sm">
                <p className='me-3'>Nama Intansi : </p> <p className='font-bold'>{state.namaIntansi}</p>
              </div>
              <div className="content text-black flex p-3 text-sm">
                <p className='me-3'>Ruangan : </p> <p className='font-bold'>{state.ruangan}</p>
              </div>
              <div className="content text-black flex p-3 text-sm">
                <p className='me-3'>KTP : </p> <p className='font-bold'>{state.ktp}</p>
              </div>
              <div className="content text-black flex p-3 text-sm pb-10">
                <p className='me-3'>Surat Pengajuan : </p> <p className='font-bold'>{state.suratPengajuan}</p>
              </div>
          </div>
          <Button
            className={"bg-[#FFE87D] text-black hover:bg-[#F1D861]"} 
            label={'Submit'}
            onClick={handleSubmit}/>
          <Button
            className={"bg-[#239F66] ms-2 text-black hover:bg-[#156842]"} 
            label={'Edit'}
            onClick={() => handleEdit(state.namaIntansi)}/>
        </div> 
      </div>
      <Footer/>
    </div>
  )
}

export default KonfirmasiPengajuan
