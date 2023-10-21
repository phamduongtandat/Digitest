import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { infoSchema } from '../validations/info.schema';

function InputForm({ edit }) {
    const navi = useNavigate()
    const [cities, setCities] = useState([])
    const [nameC, setNameC] = useState('Chọn thành phố')
    const [nameW, setNameW] = useState('Chọn Quận, Huyện')
    const [index, setIndex] = useState()
    const [onC, setOnC] = useState(false)
    const [onW, setOnW] = useState(false)
    useEffect(() => {
        axios.get('https://provinces.open-api.vn/api/?depth=2').then((data) => { setCities(data?.data) })
    }, [])

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        resolver: yupResolver(infoSchema),
        defaultValues: edit
    })
    console.log('edit :', edit)
    const onSubmit = (data) => {
        const infoM = JSON.parse(localStorage.getItem('info')) || []

        const dataIn = {
            ...data,
            id: new Date(),
            state: nameW,
            city: nameC,
            country: 'VN'


        }

        if (edit !== undefined) {
            const ind = infoM.findIndex(i => i?.id === edit?.id)
            infoM[ind] = {
                ...data, id: edit?.id,
                state: nameW,
                city: nameC,
                country: 'VN'
            }

            localStorage.setItem('info', JSON.stringify(infoM))
            return console.log(' :heheh')
        }

        infoM.push(dataIn)
        localStorage.setItem('info', JSON.stringify(infoM))
        navi('/address')

    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-start"
        >

            <div className="mb-2 flex gap-2 items-center " >
                <i className="fa-solid fa-user"></i>
                <label >Họ và tên</label>
                <span className="text-red-700 italic">{errors?.name?.message}</span>
            </div>

            <input
                name='name'
                {...register('name')}
                className="border w-full mb-4 h-9 rounded-md pl-2" placeholder="Nguyễn Văn A" type="text" />

            <div className="mb-2 flex gap-2 items-center ">
                <i className="fa-solid fa-phone"></i>
                <label  >Số điện thoại</label>
                <span className="text-red-700 italic">{errors?.phone?.message}</span>
            </div>
            <input
                name='phone'
                {...register('phone')}
                className="border w-full mb-4 h-9 rounded-md pl-2" placeholder="0 xxx xxx xxx" type="text" />


            <div className="mb-2 flex gap-2 items-center ">
                <i className="fa-solid fa-envelope"></i>
                <label  >Địa chỉ email</label>
                <span className="text-red-700 italic">{errors?.email?.message}</span>
            </div>
            <input
                name='email'
                {...register('email')}
                className="border w-full mb-4 h-9 rounded-md pl-2" placeholder="example@example" type="text" />


            <div className="mb-2 flex gap-2 items-center ">
                <i className="fa-solid fa-location-dot"></i>
                <label  >Tỉnh, thành phố</label>
            </div>

            <div

                className="relative border w-full mb-4 h-9 rounded-md"
            >


                <div className={`${onC ? 'block' : 'hidden'} absolute h-64 border w-full top-full mt-2 z-50 bg-orange-300 rounded-md p-2 overflow-y-scroll`}>
                    {cities?.map((city, ind) => <div
                        onClick={() => {
                            setIndex(ind)
                            setNameC(city?.name)
                            setOnC(false)
                        }}
                        key={city?.code}
                        className="h-9 border-b p-2 hover:bg-amber-500 "
                    >
                        {city?.name}
                    </div>)}

                </div>
                <div
                    id='ct'
                    onClick={({ target }) => {
                        if (target?.id === 'ct') {
                            setOnC(!onC)
                            setOnW(false)
                        }
                    }}
                    className="ml-2 mt-1">

                    {nameC}
                </div>

            </div>


            <div className="mb-2 flex gap-2 items-center ">
                <i className="fa-solid fa-location-dot"></i>
                <label  >Quận, huyện</label>
            </div>
            {/* <select className="border w-full mb-4 h-9 rounded-md pl-2" name="distr" id="distr">
                {cities[index]?.districts?.map(city => <option className="w-10" key={city?.code} value={city?.name}>{city?.name}</option>)}

            </select> */}

            <div className="relative border w-full mb-4 h-9 rounded-md">


                <div className={`${onW ? 'block' : 'hidden'} absolute h-64 border w-full top-full mt-2 z-40 bg-orange-300 rounded-md p-2 overflow-y-scroll`}>
                    {cities[index]?.districts?.map((city) => <div
                        onClick={() => {

                            setNameW(city?.name)
                            setOnW(false)
                        }}
                        key={city?.code}
                        className="h-9 border-b p-2 hover:bg-amber-500 "
                    >
                        {city?.name}
                    </div>)}

                </div>
                <div
                    id='ww'
                    onClick={({ target }) => {
                        if (target?.id === 'ww') {
                            setOnW(!onW)
                            setOnC(false)
                        }
                    }}
                    className="ml-2 mt-1">

                    {nameW}
                </div>

            </div>


            <div className="mb-2 flex gap-2 items-center ">
                <i className="fa-solid fa-location-dot"></i>
                <label  >Địa chỉ cụ thể</label>
                <span className="text-red-700 italic">{errors?.address?.message}</span>
            </div>
            <input
                name='address'
                {...register('address')}
                className="border w-full mb-4 h-9 rounded-md pl-2" placeholder="Địa chỉ..." type="text" />


            <div className="flex justify-between self-stretch py-5">
                <button type='submit' className=" bg-orange-500/80 py-2 px-5 rounded-md hover:bg-orange-500 font-semibold">Lưu thông tin</button>
                <div className="bg-gray-500/80 px-5 text-center pt-2 rounded-md " onClick={() => { navi('/address') }}>Hủy</div>
            </div>


        </form >
    )
}

export default InputForm
