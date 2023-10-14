import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center mt-3 ml-3 '>
            <p className="text-4xl font-epic font-bold "><span className='text-red-600'>m</span><span className='text-blue-600'>u</span><span className='text-green-600'>n</span>iverse</p>
            <div className='flex justify-center ml-32 mt-2'>
                <a href="/"><button className="w-28 mr-32 bg-red-300 rounded-3xl pt-1 pb-1 text-black font-epic font-semibold">about us</button></a>
                <a href="/pricing"><button className="w-28 mr-32 bg-blue-300 rounded-3xl pt-1 pb-1 text-black font-epic font-semibold">pricing</button></a>
                <a href="/contact"><button className="w-28 mr-32 bg-green-300 rounded-3xl pt-1 pb-1 text-black font-epic font-semibold">contact us</button></a>
                <button className="w-28  rounded-3xl pt-1 pb-1 text-black font-epic text-lg font-bold">login</button>
            </div>
        </div>
    )
}
