import React from 'react'
const Carts = ({Fooddata}) => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-3'>
            {
                Fooddata.map((value, index) => {
                    return (
                            <div className='w-[32%] p-1  rounded-xl bg-white py-10 hover:drop-shadow-xl' key={index}>
                                <img src={value.imgdata} className='rounded-2xl h-[300px] w-full px-2 ' alt='' />
                                <div className='flex justify-between px-2'>
                                    <span >{value.rname}</span>
                                    <span>{value.rating}☆</span>
                                </div>

                                <div className=' flex justify-between px-2'>
                                    <span className='text-slate-500'>{value.address}</span>
                                    <span>{value.price}</span>
                                </div>
                                <div className=' border border-b-0 border-slate-600 w-[95%] mx-2 mt-1 '></div>
                                <div className='flex p-2 items-center justify-between '>
                                    <span ><img src={value.arrimg}
                                        className='w-[18px]' alt='' /></span>
                                    <span className='text-slate-500 text-[15px]'>{value.somedata}</span>
                                    <span><img src={value.delimg}
                                        className='w-[45px]' alt='' /></span>
                                </div>
                            </div>
                    )
                })
            }

        </div>
    )
}

export default Carts