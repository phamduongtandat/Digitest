
import { useEffect, useState } from 'react'
import AddButton from '../component/AddButton'
import Info from '../component/Info'

function Address() {
  const [infoP, setInfoP] = useState([])
  useEffect(() => {
    const infoM = JSON.parse(localStorage.getItem('info')) || []
    setInfoP(infoM)
  }, [])

  const handleDel = (id) => {
    const resDel = infoP.filter(i => i?.id !== id)
    localStorage.setItem('info', JSON.stringify(resDel))
    setInfoP(resDel)
  }
  return (
    <div className="min-h-screen max-h-full p-7 border-4 w-full flex flex-col gap-5 items-center">
      <h2>Trang danh sách địa chi</h2>
      <AddButton />
      {infoP?.map(i => <Info key={i?.id} data={i} handleDel={handleDel} />)}
    </div>
  )
}

export default Address