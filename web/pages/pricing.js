import Navbar from '@/components/Nav'
import React from 'react'
import { font_100, font_200, font_300, font_400, font_500, font_600, font_700, font_800 } from '@/helpers/fonts';

export default function Pricing() {
    return (
        <div>

            <Navbar />

            <div className={`overflow-hidden ${font_500}`}>
                <h1 className={`${font_500} font-bold text-7xl mt-24 text-center`}>Pricing</h1>
                <p className={`text-center mt-2`}>We at muniverse price each service individually, so you can mix and match what you want.</p>
                <div className='grid grid-cols-3 mt-16'>
                    <div className='flex justify-center'>
                        <div className='w-9/12 rounded-lg pt-5 pb-5 h-96  border-2 border-red-500 shadow-2xl shadow-red-500'>
                            <h1 className='text-center text-4xl'>software</h1>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-9/12 rounded-lg pt-5 pb-5 h-96  border-2 border-blue-500 shadow-2xl shadow-blue-500'>
                            <p>hi!</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-9/12 rounded-lg pt-5 pb-5 h-96  border-2 border-green-500 shadow-2xl shadow-green-500'>
                            <p>hi!</p>
                        </div>
                    </div>
                </div>

                <button>hi!</button>
            </div>
        </div>
    )
}
