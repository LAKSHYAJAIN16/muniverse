import Navbar from '@/components/Nav'
import React from 'react'

export default function Pricing() {
    function paymentstuff() {
// TODO : Add Payment $#!7
window.location.replace("/after-payment-confirmation-software");
    }

    return (
        <div>
            <Navbar />
            <div className='mt-10 ml-14 z-10'>
                <h1 className='font-epic font-bold text-5xl'>Products</h1>

                <div className='flex justify-evenly mt-10'>
                    <div className='h-[300px] w-[300px] shadow-lg shadow-red-500 border-red-500 border-[1px] cursor-pointer'>
                        <img src="/monitor.png" className='h-40 w-40 ml-auto mr-auto'></img>
                        <h1 className='text-center font-epic font-bold text-3xl mt-2 text-red-500 '>Software</h1>
                        <div className='ml-4 scale-75'>
                            <li>paperless option</li>
                            <li>lobbying groups</li>
                            <li>smart marking</li>
                            <li>enhanced EB software</li>
                        </div>
                    </div>
                </div>

                <h1 className='font-epic font-bold text-5xl mt-32'>Pricing</h1>

                <div className='flex justify-evenly mt-2'>
                    <button className='h-[130px] w-[250px] shadow-lg shadow-red-500 border-red-500 border-[1px] cursor-pointer hover:scale-110 transition-all' onClick={() => paymentstuff()}>
                        <h1 className='text-center font-epic font-bold text-3xl mt-2 text-red-500'>Just Software</h1>
                        <h1 className='font-epic font-bold text-5xl text-center mt-[12px] '>$10</h1>
                    </button>
                </div>

                <br />
                <br />
            </div>
        </div>
    )
}
