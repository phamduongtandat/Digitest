import React from 'react'
import InputForm from '../component/InputForm'
import { useLocation, useParams } from 'react-router-dom'

function EditAddress() {

  const {addressId} = useParams()


const infoM=JSON.parse(localStorage.getItem('info'))||[]

const infoI=infoM.find((i:{})=>i?.id===addressId)
console.log('infoI :',infoI )

  return (
    <div className="min-h-screen max-h-full border-2 w-full flex flex-col gap-2 items-center">
    <h2 className="border-b w-full p-5">Chỉnh sửa địa chỉ</h2>
    <div className="p-4 w-full">
    <InputForm edit={infoI}/>
    </div>
  </div>
  )
}

export default EditAddress