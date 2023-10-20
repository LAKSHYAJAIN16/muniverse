import React from 'react';
import { font_100, font_200, font_300, font_400, font_500, font_600, font_700, font_800 } from '@/helpers/fonts';
import Navbar from '@/components/Nav';

export default function Onboarding() {
    return (
        <div>
            <Navbar />
            <div className={`overflow-hidden ${font_500}`}>
                <div className='mt-24'>
                    <p className='text-5xl text-center'>Welcome to muniverse!</p>
                    <p className={`text-lg text-center ${font_300}`}>Before we get started, we need some information. So please fill out this (boring) form.</p>

                    <input type="text"></input>
                </div>
            </div>
        </div>
    )
}
