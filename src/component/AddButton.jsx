import { useNavigate } from 'react-router-dom'


function AddButton() {

    const navi = useNavigate()
    return (
        <div className="border h-52 p-5 self-stretch">
            <div className="border border-dashed h-full flex justify-center items-center">
                <div className="flex flex-col items-center gap-5">
                    <div className="cursor-pointer border border-dotted rounded-full w-20 h-20 flex justify-center items-center">

                        <i className="fa-solid fa-plus fa-2xl text-gray-200 "></i>

                    </div>
                    <button onClick={() => { navi('/add-address') }} className="py-2 px-5">Thêm mới</button>
                </div>

            </div>

        </div>
    )
}

export default AddButton
