import React from 'react';
import { font_100, font_200, font_300, font_400, font_500, font_600, font_700, font_800 } from '@/helpers/fonts';
import Navbar from '@/components/Nav';

export default function Onboarding() {
    return (
        <div>
            <Navbar />
            <div className={`overflow-hidden ${font_500}`}>
                <div className='mt-24'>
                    <p className='text-6xl text-center'>Welcome to muniverse!</p>
                    <p className={`text-lg text-center ${font_300}`}>Before we get started, we need some information. So please fill out this (boring) form.</p>

                    <form>
                        <div className="mt-10 ml-10">
                            <h1 className='mb-5 text-3xl'>School Information</h1>
                            <div className="mb-4 ">
                                <label
                                    className="block text-gray-700 text-md mb-2 "
                                    htmlFor="name"
                                >
                                    name of your school
                                </label>
                                <input
                                    className={`px-3 py-2 border border-gray-300 rounded-md outline-none focus:outline-none focus:border-red-500 transition-all text-sm w-96 ${font_300}`}
                                    type="text"
                                    id="schoolname"
                                    name="schoolname"
                                    placeholder="Enter the name of your school"
                                    required
                                />
                            </div>

                            <div className="mb-4 ">
                                <label
                                    className="block text-gray-700 text-md mb-2 "
                                    htmlFor="name"
                                >
                                    school email ID
                                </label>
                                <input
                                    className={`px-3 py-2 border border-gray-300 rounded-md outline-none focus:outline-none focus:border-red-500 transition-all text-sm w-96 ${font_300}`}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter the official email address of your school"
                                    required
                                />
                            </div>

                            <div className="mb-4 ">
                                <label
                                    className="block text-gray-700 text-md mb-2 "
                                    htmlFor="name"
                                >
                                    school address
                                </label>
                                <input
                                    className={`px-3 py-2 border border-gray-300 rounded-md outline-none focus:outline-none focus:border-red-500 transition-all text-sm w-96 ${font_300}`}
                                    type="text"
                                    id="address-line-1"
                                    name="address-line-1"
                                    placeholder="Address Line 1"
                                /><br />
                                <input
                                    className={`px-3 py-2 border border-gray-300 rounded-md outline-none focus:outline-none focus:border-red-500 transition-all text-sm w-96 ${font_300}`}
                                    type="text"
                                    id="address-line-2"
                                    name="address-line-2"
                                    placeholder="Address Line 2"
                                />
                            </div>

                            <div className="mb-4 ">
                                <label
                                    className="block text-gray-700 text-md mb-2 "
                                    htmlFor="name"
                                >
                                    school cit
                                </label>
                                <input
                                    className={`px-3 py-2 border border-gray-300 rounded-md outline-none focus:outline-none focus:border-red-500 transition-all text-sm w-96 ${font_300}`}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter the official email address of your school"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
