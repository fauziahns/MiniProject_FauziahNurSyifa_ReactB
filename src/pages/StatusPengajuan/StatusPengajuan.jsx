import React from 'react'
import Navbar from '../../global/Navbar/Navbar'
import Footer from '../../global/Footer/Footer'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import Loader from '../../global/Loader/Loader'
import { GetData, DeleteData } from '../../Mutation/Mutation'

function StatusPengajuan() {
  const {data, loading, error} = useQuery(GetData)
  const [pengajuan, setPengajuan] = useState([])
  useEffect(() => {
    console.log('loading', loading)
    console.log('data ', data)
    console.log('error = ', error)

    if(!loading && error !== undefined){
        setPengajuan(pengajuan.table_product)
    }
 })

 const [deleteDataPengajuan] = useMutation(DeleteData, {
  refetchQueries: [GetData]
 })

 const handleDelete = (namaIntansi) => {
    const deleteCard=[...pengajuan]
    deleteCard.splice(namaIntansi, 1)
    setPengajuan(deleteCard)

      deleteDataPengajuan({
        variables: {
          namaIntansi: namaIntansi
        }
      })
 }

  return (
    <div>
      <Navbar/>
        <div className="m-10 mb-[70px] flex flex-col items-center justify-center">
          {
            loading ? <Loader/> :
            data?.table_pengajuan.map(item => 
              <div className='bg-[#fdfdfd] border text-sm text-black w-[30%] rounded-md p-3 mb-3 hover:drop-shadow-md'>
                <div className="title flex justify-between">
                  <p className='font-bold'>{item.namaIntansi}</p> 
                  <div onClick={() => handleDelete(item.namaIntansi)} >
                    <i class="fa-solid fa-delete-left hover:text-red-600" ></i> 
                  </div> 
                </div>
                <div className="flex text-[13px]">
                  <p className='pe-4'>{item.tanggalKegiatan}</p>
                  <p>{item.ruangan}</p>
                </div>
                  <p className='pt-5 text-[12px]'>◉ Sedang Ditinjau</p>
                  
              </div>
            )
          }
        </div>
      <Footer/>
    </div>
  )
}

export default StatusPengajuan
