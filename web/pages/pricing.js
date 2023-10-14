import Navbar from '@/components/Nav'
import React from 'react'

export default function Pricing() {
    return (
        <div>
            <Navbar />
            <div className='mt-10 ml-14 z-10'>
                <h1 className='font-epic font-bold text-5xl'>Products</h1>

                <div className='flex justify-evenly mt-10'>
                    <div className='h-[300px] w-[300px] shadow-lg shadow-red-500 border-red-500 border-[1px]'>
                        <h1 className='text-center font-epic font-bold text-3xl mt-3 text-red-500'>Software</h1>
                        <div className='ml-4 mt-4'>
                            <li>paperless option</li>
                            <li>lobbying groups</li>
                            <li>smart marking</li>
                            <li>enhanced EB software</li>
                        </div>
                    </div>
                </div>

                <h1 className='font-epic font-bold text-5xl mt-32'>Pricing</h1>
            </div>
        </div>
    )
}
