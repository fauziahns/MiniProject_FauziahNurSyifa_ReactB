import { gql } from '@apollo/client'

export const AddData = gql`
    mutation MyMutation($object: table_pengajuan_insert_input!) {
      insert_table_pengajuan_one(object: $object) {
          tanggalKegiatan
          jamKegiatan
          namaIntansi
          namaKegiatan
          ruangan
          deskripsiKegiatan
          ktp
          suratPengajuan
      }
    }
`

export const GetData = gql `
  query MyQuery {
    table_pengajuan {
      tanggalKegiatan
      jamKegiatan
      namaIntansi
      namaKegiatan
      ruangan
      deskripsiKegiatan
      ktp
      suratPengajuan
    }
  }
`

export const DeleteData = gql `
  mutation MyMutation($namaIntansi : String!) {
    delete_table_pengajuan_by_pk(namaIntansi: $namaIntansi ) {
      namaIntansi
    }
  } 
`
