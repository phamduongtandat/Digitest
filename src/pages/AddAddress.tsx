import React from 'react'
import InputForm from '../component/InputForm'

function AddAddress() {
  return (
    <div className="min-h-screen max-h-full border-2 w-full flex flex-col gap-2 items-center">
      <h2 className="border-b w-full p-5">Thêm mới địa chỉ</h2>
      <div className="p-4 w-full">
      <InputForm/>
      </div>
    </div>
  )
}

export default AddAddress