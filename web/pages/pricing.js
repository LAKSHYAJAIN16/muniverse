import Navbar from '@/components/Nav'
import React from 'react'
import { font_100, font_200, font_300, font_400, font_500, font_600, font_700, font_800 } from '@/helpers/fonts';

export default function Pricing() {
    return (
        <div>

            <Navbar />

            <div className={`overflow-hidden ${font_500}`}>
                <h1 className={`${font_500} font-bold text-5xl mt-24 text-center`}>Pricing</h1>
                <p className={`text-center mt-2`}>We at muniverse price each service individually, so you can mix and match what you want.</p>
                <div className='grid grid-cols-3'>
                    <div><p>hi!</p></div>
                    <div><p>hi!</p></div>
                    <div><p>hi!</p></div>
                </div>

            </div>
        </div>
    )
}
