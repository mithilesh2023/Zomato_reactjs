import React, { useEffect, useState } from 'react'
import Carts from './Carts';
import Fooddata from './FoodData'
import SkeletonCard from './SkeletonCard';
const Search = () => {

    const [fdata, setFdata] = useState(Fooddata)
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);
    // console.log(copydata);
    const changeData=(e)=>{
        // console.log(e)
        let getchangedata=e.toLowerCase();

        if(getchangedata===''){
            setCopyData(fdata);
        }else{
            let storedata=copydata.filter((value,key)=>{
                return value.rname.toLowerCase().match(getchangedata);
            })
            setCopyData(storedata)
        }
    }

    const imgLink = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

    useEffect(() => {
        setTimeout(() => {
            setCopyData(Fooddata)
        }, 3000)
    }, [])

    return (
        <div>
            <div className='flex justify-between px-12 py-3 items-center'>
                <img src={imgLink} className="w-[100px] h-[25px]  " alt='' />
                <h2 className='text-2xl'>Search Filter App</h2>
            </div>
            <div className='flex items-center justify-center py-4 gap-1'>
                <input type="text" onChange={(e)=>changeData(e.target.value)} className='border border-slate-500 text-xl p-2 rounded' size={50} placeholder="Search Restaurent" />
                <div>
                    <button className='border border-slate-500 text-xl bg-red-400 text-white  p-2 rounded'>Submit</button>
                </div>
            </div>
            <div className='pl-12'>
                <h2 className='text-3xl '>Restaurent  in Ahmadabad Open Now</h2>
            </div>
            <div>
                {
                    copydata && copydata.length ? <Carts Fooddata={copydata}/>:  <SkeletonCard sdata={fdata}/>
                }
            </div>
          
        </div>
    )

}

export default Search