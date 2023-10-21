import React, { useState } from 'react';
import { font_100, font_200, font_300, font_400, font_500, font_600, font_700, font_800 } from '@/helpers/fonts';
import Navbar from '@/components/Nav';
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Onboarding() {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [view, setView] = useState(0);
    return (
        <div>
            <Navbar />
            <div className={`overflow-hidden ${font_500}`}>
                {view === 0 && (
                    <>
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
                                        <h6 className='block text-gray-700 text-md mb-2'>school country</h6>
                                        <div className={`w-96 ${font_300} mb-4`}>
                                            <CountrySelect
                                                onChange={(e) => {
                                                    setCountryid(e.id);
                                                }}
                                                placeHolder="Select Country"
                                            />
                                        </div>
                                        <h6 className='block text-gray-700 text-md mb-2'>school state</h6>
                                        <div className={`w-96 ${font_300} mb-4`}>
                                            <StateSelect
                                                countryid={countryid}
                                                onChange={(e) => {
                                                    setstateid(e.id);
                                                }}
                                                placeHolder="Select State"
                                            />
                                        </div>


                                        <h6 className="block text-gray-700 text-md mb-2">school city</h6>
                                        <div className={`w-96 ${font_300}`}>
                                            <CitySelect
                                                countryid={countryid}
                                                stateid={stateid}
                                                onChange={(e) => {
                                                    console.log(e);
                                                }}
                                                placeHolder="Select City"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-10 ml-10'>
                                    <h1 className='mb-5 text-3xl'>Conference Information</h1>
                                    <div className="mb-4 ">
                                        <div className='grid grid-cols-2'>
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-md mb-2 "
                                                    htmlFor="name"
                                                >
                                                    start date of conference
                                                </label>
                                                <Calendar value={startDate} />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-md mb-2 "
                                                    htmlFor="name"
                                                >
                                                    end date of conference
                                                </label>
                                                <Calendar value={endDate} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <br />
                            <div className='flex justify-center mt-16  mb-10'>
                                <button className='w-96 h-16 rounded-2xl bg-green-400 hover:scale-110 transition-all' onClick={() => setView(1)}>next</button>
                            </div>
                        </div>
                    </>
                )}

                {view === 1 && (
                    <>
                    </>
                )}
            </div>
        </div>
    )
}
