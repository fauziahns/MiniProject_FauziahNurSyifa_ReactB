import React from 'react'
import FileInput from '../FileInput.jsx/FileInput'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"

function Footer() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pertanyaan: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Kolom Nama Wajib di Isi").min(3, "Minimal 3 Huruf"),
      email: Yup.string().required("Kolom Email Wajib di Isi").email(),
      pertanyaan: Yup.string().required("Kolom Pertanyaan Wajib di Isi").min(10, "Minimal 10 Huruf") 
    })
  })

  const handleForm = (event) => {
    const { target } = event
    formik.setFieldValue(target.name, target.value)
  }
  return (
    <div className='bg-[#221D55]'>
      <div className="row-one flex gap-[90px] pb-9 ps-3">
        <div className="col pt-9 ps-9 w-[40%]">
          <img src="\src\assets\logo.png" alt="logo" className='w-20'/>
            <div className="text-footer text-sm pt-3 leading-7">
              <p>Creative Hub Bandung</p>
              <p className=''>Jl. Laswi No.7, Kacapiring, Kec. Batununggal, Kota Bandung</p>
            </div>
            <div className="icon-footer pt-4">
              <i className="fa-brands fa-instagram fa-lg"></i>
              <i className="fa-brands fa-youtube fa-lg ps-2"></i>
            </div>
        </div>
        <div className="col-two pt-9 w-[60%]">
          <p className='ps-3'>Ajukan Pertanyaan</p>
          <form className='text-black'>
            <div className="name">
              <FileInput 
                className={'w-[35%] py-3'}
                placeholder={'Nama'}
                id={'nama-footer'}
                name={'name'}
                value={formik.values.name}
                onChange={handleForm}
              />
              <p className='text-red-500 text-[13px]'>{formik.errors.name}</p>
            </div>
            <div className="email">
              <FileInput
                className={'w-[35%] py-3 '}
                placeholder={'Email'}
                id={'email-footer'}
                name={'email'}
                value={formik.values.email}
                onChange={handleForm}
              />
              <p className='text-red-500 text-[13px]'>{formik.errors.email}</p>
            </div>
            <div className="pertanyaan">
              <TextArea
                className={'w-[65%] py-3 '}
                placeholder={'Pertanyaan'}
                name={'pertanyaan'}
                rows={'4'}
                id={'pertanyaan-footer'}
                value={formik.values.pertanyaan}
                onChange={handleForm}
              />
              <p className='text-red-500 text-[13px]'>{formik.errors.pertanyaan}</p>
            </div>
          </form>
          <button
            className={"rounded-full focus:outline-none focus:ring-4 w-[130px] text-center focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 bg-[#156842] ms-2 mt-3 text-white hover:bg-[#115837]"} 
          ><a href="mailto:fauziahnsf@gmail.com">
            Send
          </a>
          </button>
        </div>
      </div>
      <div className="end-footer bg-[#19153E] text-white text-xs p-2 text-center">
        <p>© 2023 Bandung Creative Hub. All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
