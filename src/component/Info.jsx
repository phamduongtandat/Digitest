import { useNavigate } from 'react-router-dom'
function Info({ data, handleDel }) {
    const navi = useNavigate()
    return (
        <div className="w-full border rounded-sm p-7 flex flex-col justify-start gap-1">
            <div className="flex justify-between mt-4">
                <h2>Họ và tên: {data?.name}</h2>
                <div
                    onClick={() => { handleDel(data?.id) }}
                    className="text-red-500">Xóa</div>
            </div>

            <div className=" flex gap-2 items-center mt-4 ">
                <i className="fa-solid fa-location-dot"></i>
                <label  >Địa chỉ cụ thể</label>
            </div>

            <div>{data?.address} {data?.state} {data?.city} {data?.country} </div>

            <div className=" flex gap-2 items-center mt-4 ">
                <i className="fa-solid fa-phone"></i>
                <label  >Số điện thoại</label>
            </div>

            <div>{data?.phone}</div>

            <div className=" flex gap-2 items-center mt-4 ">
                <i className="fa-solid fa-envelope"></i>
                <label  >Địa chỉ email</label>
            </div>

            <div>{data?.email}</div>

            <div onClick={() => { navi(`/address/${data?.id}`) }} className="text-blue-700 mt-5 cursor-pointer">Chỉnh sửa</div>

        </div>
    )
}

export default Info
