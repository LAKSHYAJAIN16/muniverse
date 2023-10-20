import Navbar from '@/components/Nav'
import React from 'react'
import { font_100, font_200, font_300, font_400, font_500, font_600, font_700, font_800 } from '@/helpers/fonts';

export default function Pricing() {
    return (
        <div>

            <Navbar />

            <div className={`overflow-hidden ${font_500}`}>
                <h1 className={`${font_600} font-bold text-6xl mt-24 text-center`}>Pricing</h1>
                <p className={`text-center mt-2`}>We at muniverse price each service individually, so you can mix and match what you want.</p>
                <div className='grid grid-cols-3 mt-16'>
                    <div className='flex justify-center'>
                        <div className='cursor-pointer w-9/12 rounded-lg pt-5 pb-5 h-96  border-2 border-red-500 shadow-2xl shadow-red-500'>
                            <h1 className='text-center text-5xl'>software</h1>
                            <ul className='pl-5 mt-6'>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>paperless conferences</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>digital EB grading software</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>delegate software</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>automated fact-checking</p>
                                </li>
                            </ul>

                            <p className={`mt-10 text-center text-7xl text-red-500 ${font_500}`}>$5 <span className={`text-sm ${font_400}`}>/conference</span></p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='cursor-pointer w-9/12 rounded-lg pt-5 pb-5 h-96  border-2 border-blue-500 shadow-2xl shadow-blue-500'>
                            <h1 className='text-center text-5xl'>software</h1>
                            <ul className='pl-5 mt-6'>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>paperless conferences</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>digital EB grading software</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>delegate software</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>automated fact-checking</p>
                                </li>
                            </ul>

                            <p className={`mt-10 text-center text-7xl text-blue-500 ${font_500}`}>$5 <span className={`text-sm ${font_400}`}>/conference</span></p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='cursor-pointer w-9/12 rounded-lg pt-5 pb-5 h-96  border-2 border-green-500 shadow-2xl shadow-green-500'>
                            <h1 className='text-center text-5xl'>software</h1>
                            <ul className='pl-5 mt-6'>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>paperless conferences</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>digital EB grading software</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>delegate software</p>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <img src="/check_3.png" className='h-6'></img>
                                    <p className={`pl-3 ${font_400}`}>automated fact-checking</p>
                                </li>
                            </ul>

                            <p className={`mt-10 text-center text-7xl text-green-500 ${font_500}`}>$5 <span className={`text-sm ${font_400}`}>/conference</span></p>
                        </div>
                    </div>
                </div>

                <button>hi!</button>
            </div>
        </div>
    )
}
