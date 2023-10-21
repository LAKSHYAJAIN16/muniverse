import React from 'react'
import { font_100, font_200, font_300, font_400, font_500, font_600, font_700, font_800 } from '@/helpers/fonts'

export default function Navbar() {
    return (
        <div className='fixed mt-0 mb-0 ml-0 mr-0 w-full bg-white z-[12361287361]'>
            <div className='flex items-center ml-3 border-b-2 pb-4 pt-3 '>
                <p className={`text-4xl ${font_400}`}><span className='text-red-600'>m</span><span className='text-blue-600'>u</span><span className='text-green-600'>n</span>iverse</p>
                <div className='flex justify-center ml-28 mt-2'>
                    <a href="/"><button className={`w-36 mr-32 bg-red-300 shadow-md shadow-red-300 rounded-3xl pt-2 pb-2 text-black ${font_500} `}>about us</button></a>
                    <a href="/products"><button className={`w-36 mr-32 bg-blue-300 shadow-md shadow-blue-300 rounded-3xl pt-2 pb-2 text-black ${font_500} `}>products</button></a>
                    <a href="/pricing"><button className={`w-36 mr-32 bg-green-300 shadow-md shadow-green-300 rounded-3xl pt-2 pb-2 text-black ${font_500} `}>pricing</button></a>
                    <button className="w-28  rounded-3xl pt-1 pb-1 text-black font-epic text-lg font-bold">login</button>
                </div>
            </div>
        </div>
    )
}
