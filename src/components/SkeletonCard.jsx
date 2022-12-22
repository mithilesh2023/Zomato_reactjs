import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const SkeletonCard = ({ sdata }) => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-8 py-10'>
            {
                sdata.map((ele,k)=>{
                    return(
                        <>
                         <Stack style={{ width: '24rem' }} className="mb-4" >
                                <Skeleton variant="rectangular" animation="wave" width={"24rem"} height={200} className='rounded-lg' />
                                <div className='flex justify-between'>
                                    <Skeleton variant="text" animation="wave" width={"12rem"} height={40} />
                                    <Skeleton variant="text" animation="wave" width={"5rem"} height={40} />
                                </div>
                                <div className='flex justify-between'>
                                    <Skeleton variant="text" animation="wave" width={"17rem"} height={40} />
                                    <Skeleton variant="text" animation="wave" width={"5rem"} height={40} />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Skeleton variant="circular" animation="wave" width={20} height={20} />
                                    <Skeleton variant="text" animation="wave" width={"16rem"} height={40} />
                                    <Skeleton variant="text" animation="wave" width={"5rem"} height={40} />
                                </div>
                            </Stack>
                        </>
                    )
                })
            }
                       
        </div>
    )
}

export default SkeletonCard