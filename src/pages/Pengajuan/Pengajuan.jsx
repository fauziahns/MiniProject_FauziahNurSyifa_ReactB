import React, { useState, useRef } from 'react'
import Navbar from '../../global/Navbar/Navbar'
import Footer from '../../global/Footer/Footer'
import FileInput from '../../global/FileInput.jsx/FileInput'
import TextArea from '../../global/TextArea/TextArea'
import Button from '../../global/Button/Button'
import { useFormik } from "formik"
import Radio from '../../global/Radio/Radio'
import Label from '../../global/Label/Label'
import FileUpload from '../../global/FileUpload/FileUpload'
import * as Yup from "yup"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { storage } from '../../firebaseconfig'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'


const validation = Yup.object().shape({
    tanggalKegiatan: Yup.
                    string().
                    required("Tanggal Kegiatan Wajib di Isi"),
    namaIntansi: Yup.
                string().
                required("Nama Intansi Wajib di Isi").
                min(3, "Nama Intansi Minimal Terdiri Dari 3 Huruf"),
    namaKegiatan : Yup.
                string().
                required("Nama Kegiatan Wajib di Isi").
                min(3, "Nama Kegiatan Minimal Terdiri Dari 3 Huruf"),
    jamKegiatan: Yup.
                string().
                required("Jam Kegiatan Wajib di Isi"),
    ruangan: Yup.
            string().
            required("Ruangan Wajib di Isi"),
    deskripsiKegiatan: Yup.
                string().required("Deskripsi Kegiatan Wajib di Isi").
                min(10, "Deskripsi Kegiatan Minimal Terdiri Dari 10 Huruf"),
    ktp: Yup.
          mixed().
          nullable().
          required("Kolom KTP Wajib di Isi"),
    suratPengajuan: Yup.
          mixed().
          nullable().
          required("Kolom Surat Pengajuan Wajib di Isi"),  
  })

function Pengajuan() {
  const {state} = useLocation()
  const fileRef = useRef(null)
  const Navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState(null)

  //handle onSubmit
  const FormData = (e) => {
    e.preventDefault()
    Navigate(`/ConfirmationPage`, { state: formik.values }),
    console.log(formik.values);
    
    const storageRef = ref(storage, `files/${formik.name.ktp}`, `files/${formik.name.suratPengajuan}`)
    const uploadTask = uploadBytesResumable(storageRef, formik.values.ktp, formik.values.suratPengajuan)

    uploadTask.on("state_changed",
      (error) => {
        console.log(error);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then((url) => {
          setImgUrl(url)
        })
      }
    )
  }

  console.log(state);

  const formik = useFormik({
    initialValues: {
      tanggalKegiatan: state?.tanggalKegiatan || "" ,
      namaIntansi: state?.namaIntansi || "",
      namaKegiatan: state?.namaKegiatan || "",
      ruangan: state?.ruangan || "",
      jamKegiatan: state?.jamKegiatan || "",
      deskripsiKegiatan: state?.deskripsiKegiatan || "",
      ktp: "",
      suratPengajuan: "",
    },
    onSubmit: FormData,
    validationSchema: validation
  })

  const handleOnChange = (event) => {
    const { target } = event
    formik.setFieldValue(target.name, target.value)
    console.log(target.name + target.value);
  }

  const pdfDownload = () => {
    fetch('contoh-surat-pengajuan-creativehubbdg.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'contoh-surat-pengajuan-creativehubbdg.pdf';
            alink.click();
        })
    })
}
  return (
    <div>
      <div className='bg-[#FAFAFF]'>
        <Navbar/>
        <div className="hero flex justify-center">
          <img src="src\assets\herojadwal.png" alt="herocreativehub" />
        </div>
        <div className="content-text text-black ps-[100px] pt-[40px] pb-[90px] ">
          <h1 className='font-bold text-[20px]'>Form Pengajuan Peminjaman Ruangan di Creative Hub Bandung</h1>
            <p className='text-[15px] pb-5 py-3'>Pemanfaatan fasilitas Bandung Creative Hub <a className='underline font-bold'>tidak dipungut biaya apa pun.</a></p>
              <form action="" className='mb-12' onSubmit={formik.handleSubmit}>
                  {/* tanggalKegiatan */}
                  <div className="tanggal-kegiatan py-3 my-2">
                    <p className='text-sm pb-3 font-bold'>Tanggal Kegiatan</p>
                    <input type="date" 
                      name='tanggalKegiatan'
                      value={formik.values.tanggalKegiatan}
                      onChange={handleOnChange}
                      onBlur={formik.handleBlur}
                      className='p-2 max-w-md border-2 border-zinc-500 rounded-md'/>
                    <p className='text-red-500 text-[13px]'>{formik.errors.tanggalKegiatan}</p>
                  </div>

                  {/* namaIntansi */}
                  <div className="nama-intansi py-3 my-2">
                    <FileInput 
                      classNameInput={'border-zinc-500'}
                      placeholder={'Nama Intansi/Komunitas'}
                      name={'namaIntansi'}
                      value={formik.values.namaIntansi}
                      onChange={handleOnChange}
                      onBlur={formik.handleBlur}/>
                    <p className='text-red-500 text-[13px]'>{formik.errors.namaIntansi}</p>
                  </div>

                  {/* namaKegiatan */}
                  <div className="nama-kegiatan py-3 my-2">
                    <FileInput 
                      classNameInput={'border-zinc-500'}
                      placeholder={'Nama Kegiatan'}
                      name={'namaKegiatan'}
                      value={formik.values.namaKegiatan}
                      onChange={handleOnChange}
                      onBlur={formik.handleBlur}/>
                    <p className='text-red-500 text-[13px]'>{formik.errors.namaKegiatan}</p>
                  </div>

                  {/* Ruangan */}
                  <div className="ruangan py-3 my-2">
                    <Label  
                      className={'leading-10 m-4 text-sm font-bold'} 
                      label={'Ruangan '}/>
                    <div>
                      <div className="flex">
                        <Radio 
                          name="ruangan"
                          type={'radio'} 
                          value={'Studio Musik'}
                          onChange={handleOnChange}
                          checked={ state?.ruangan === 'Studio Musik' || formik.values.ruangan==='Studio Musik'} />
                        <Label 
                          className={'text-sm'} 
                          htmlFor={'studioMusik'}
                          label={'Studio Musik'}/>
                      </div>
                      <div className="flex">
                        <Radio 
                          name="ruangan"
                          type={'radio'} 
                          value={'Studio Tari'}
                          onChange={handleOnChange}
                          checked={ state?.ruangan === 'Studio Tari' ||formik.values.ruangan==='Studio Tari'}/> 
                        <Label 
                          className={'text-sm'}   
                          htmlFor={'studioTari'}
                          label={'Studio Tari'} />
                      </div>
                      <div className="flex">
                        <Radio 
                          name="ruangan"
                          type={'radio'} 
                          value={'Studio Animasi'}
                          onChange={handleOnChange}
                          checked={state?.ruangan === 'Studio Animasi' ||formik.values.ruangan==='Studio Animasi'}/>
                        <Label 
                          className={'text-sm'}   
                          htmlFor={'studioAnimasi'}
                          label={'Studio Animasi'} />
                      </div>
                      <div className="flex max-w-md">
                        <Radio 
                          name="ruangan"
                          type={'radio'} 
                          value={'Co-Working Space'}
                          onChange={handleOnChange}
                          checked={state?.ruangan === 'Co-Working Space' ||formik.values.ruangan==='Co-Working Space'}/>
                        <Label 
                          className={'text-sm'}  
                          htmlFor={'coWorkingSpace'}
                          label={'Co-Working Space'} 
                          />
                    </div>
                    <p className='text-red-500 text-[13px]'>{formik.errors.ruangan}</p>
                  </div>

                  {/* jamKegiatan */}
                  </div>
                  <div className="jam-kegiatan flex flex-col my-2">
                    <Label label={'Jam Kegiatan'} className={'text-sm font-bold mt-4'}/>
                    <select 
                      onChange={handleOnChange}
                      value={formik.values.jamKegiatan}
                      onBlur={formik.handleBlur}
                      defaultValue={
                        state?.jamKegiatan
                      }
                      name="jamKegiatan" 
                      className="max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value=" ">Pilih jam kegiatan ... </option>
                        <option value="09.00 - 11.00" >09.00 - 11.00</option>
                        <option value="11.00 - 13.00" >11.00 - 13.00</option>
                        <option value="13.00 - 15.00" >13.00 - 15.00</option>
                    </select>
                    <p className='text-red-500 text-[13px]'>{formik.errors.jamKegiatan}</p>
                  </div>

                  {/* deskripsiKegiatan */}
                  <div className="deskripsi-kegiatan py-3 my-5">
                    <TextArea 
                      placeholder={'Deskripsi Singkat Kegiatan'}
                      rows={'5'}
                      name={'deskripsiKegiatan'}
                      value={formik.values.deskripsiKegiatan}
                      classNameTextArea={'border-zinc-500'}
                      onChange={handleOnChange}
                      onBlur={formik.handleBlur}/>
                    <p className='text-red-500 text-[13px]'>{formik.errors.deskripsiKegiatan}</p>
                  </div>

                  {/* KTP */}
                  <div className="ktp ">
                    <Label label={'KTP'} className={'text-sm font-bold'}/>
                    <FileUpload
                      onChange={handleOnChange}
                      name={'ktp'}
                      accept={'image/*'}
                      fileRef={fileRef}
                      value={formik.values.ktp}/>
                    <p className='text-red-500 text-[13px]'>{formik.errors.ktp}</p>
                  </div>

                  {/* Surat Pengajuan */}
                  <div className="surat-pengajuan mt-5">
                    <Label label={'Surat Pengajuan'} className={'text-sm font-bold'}/>
                    <FileUpload
                      onChange={handleOnChange}
                      name={'suratPengajuan'}
                      accept={'image/*'}
                      fileRef={fileRef}
                      value={formik.values.suratPengajuan}/>
                    <p className='text-red-500 text-[13px]'>{formik.errors.suratPengajuan}</p>
                  </div>

                {/* link template surat pengajuan */}
                <div className="link-surat-pengajuan mt-4 text-sm">
                <i className="fa-sharp fa-solid fa-circle-down me-2"></i><button href="" className=' hover:underline text-gray-600 text-[13px]' onClick={pdfDownload}>Download Template Surat Pengajuan</button>
                </div>
          </form>
          <Button
              className={"bg-[#FFE87D] text-black hover:bg-[#F1D861] disabled:bg-[#FFF3BB] disabled:text-stone-500"} 
              label={'Submit'}
              onClick={FormData}
              disabled={!(formik.isValid && formik.dirty)}/>
          </div>
         <Footer/>
        </div>
    </div>
  )
}

export default Pengajuan
