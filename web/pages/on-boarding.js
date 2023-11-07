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
import axios from "axios";
import { config } from "dotenv";
import { backend } from '@/helpers/not-env-variables';
import Loader, { CenteredLoader } from '@/components/Loader';

export default function Onboarding() {
    const [countryid, setCountryid] = useState(0);
    const [stateid, setStateid] = useState(0);
    const [cityid, setCityid] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [view, setView] = useState(0);
    const [incompletePayload, setIncompletePayload] = useState();

    async function registerCallback(e) {
        config();
        e.preventDefault();

        // Assemble Payload
        const form_data = new FormData(e.target);
        const dat = {
            ...incompletePayload,
            isPlanning: form_data.has("isPlanning"),
            isVirtualMUN: form_data.has("isVirtual"),
            isSoftware: form_data.has("isSoftware")
        }
        console.log(JSON.stringify(dat));

        // Send that baby to backend
        setView(2);
        const url = backend + "/api/POST/on-board";
        const res = await axios.post(url, dat);

        // All of this is garbage.
    }

    function firstPageCallback(e) {
        e.preventDefault();

        const formData = new FormData(e.target)

        // Assemble Payload
        const payload = {
            school_name: formData.get("schoolname"),
            school_email: formData.get("schoolemail"),
            schoolAddress: {
                line_1: formData.get("address-line-1"),
                line_2: formData.get("address-line-2"),
            },
            location: {
                country: countryid,
                state: stateid,
                city: cityid,
            },
            conf_name: formData.get("conf-name"),
            conf_dates: {
                start: startDate,
                end: endDate,
            }
        }
        console.log(payload);
        setIncompletePayload(payload);
        setView(1);
    }

    return (
        <div>
            <Navbar />
            <div className={`overflow-hidden ${font_500}`}>
                {view === 0 && (
                    <>
                        <div className='mt-24'>
                            <p className='text-6xl text-center'>Welcome to muniverse!</p>
                            <p className={`text-lg text-center ${font_300}`}>Before we get started, we need some information. So please fill out this (boring) form.</p>

                            <form onSubmit={(e) => firstPageCallback(e)}>
                                <div className="mt-10 ml-10">
                                    <h1 className='mb-5 text-3xl'>School Information</h1>
                                    <div className="mb-4 ">
                                        <label
                                            className="block text-gray-700 text-md mb-2 "
                                            htmlFor="schoolname"
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
                                            htmlFor="schoolemail"
                                        >
                                            school email ID
                                        </label>
                                        <input
                                            className={`px-3 py-2 border border-gray-300 rounded-md outline-none focus:outline-none focus:border-red-500 transition-all text-sm w-96 ${font_300}`}
                                            type="email"
                                            id="schoolemail"
                                            name="schoolemail"
                                            placeholder="Enter the official email address of your school"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4 ">
                                        <label
                                            className="block text-gray-700 text-md mb-2 "
                                            htmlFor="address-line-1"
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
                                                    setStateid(e.id);
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
                                                    setCityid(e.id);
                                                }}
                                                placeHolder="Select City"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-10 ml-10'>
                                    <h1 className='mb-5 text-3xl'>Conference Information</h1>
                                    <div className="mb-4 ">
                                        <label
                                            className="block text-gray-700 text-md mb-2 "
                                            htmlFor="conf-name"
                                        >
                                            conference name
                                        </label>
                                        <input
                                            className={`px-3 py-2 border border-gray-300 rounded-md outline-none focus:outline-none focus:border-blue-500 transition-all text-sm w-96 ${font_300}`}
                                            type="text"
                                            id="conf-name"
                                            name="conf-name"
                                            placeholder="Enter the name of your conference"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 ">
                                        <div className='grid grid-cols-2'>
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-md mb-2 "
                                                >
                                                    start date of conference
                                                </label>
                                                <Calendar value={startDate} onChange={setStartDate} />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-gray-700 text-md mb-2 "
                                                >
                                                    end date of conference
                                                </label>
                                                <Calendar value={endDate} onChange={setEndDate} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-center mt-16  mb-10'>
                                    <button className='w-96 h-16 rounded-2xl bg-green-400 hover:scale-110 transition-all' type="submit">next</button>
                                </div>
                            </form>

                            <br />
                        </div>
                    </>
                )}

                {view === 1 && (
                    <>
                        <div className='mt-24'>
                            <p className='text-6xl text-center'>Choose your Products</p>

                            <form onSubmit={(e) => registerCallback(e)}>
                                <br />
                                <div className='flex items-center'>
                                    <h1 className={`text-4xl ${font_700} text-red-500 ml-32`}>Software</h1>
                                    <input className='ml-10' type="checkbox" name="isSoftware"></input>
                                </div>
                                <br />
                                <div className='flex items-center'>
                                    <h1 className={`text-4xl ${font_700} text-green-500 ml-32`}>Virtual MUN</h1>
                                    <input className='ml-10' type="checkbox" name="isVirtual"></input>
                                </div>
                                <br />
                                <div className='flex items-center'>
                                    <h1 className={`text-4xl ${font_700} text-blue-500 ml-32`}>Planning </h1>
                                    <input className='ml-10' type="checkbox" name="isPlanning"></input>
                                </div>

                                <div className='flex justify-center mt-16  mb-10'>
                                    <button className='scale-90 w-72 h-16 rounded-2xl bg-red-400 hover:scale-110 transition-all' type="button" onClick={() => setView(0)}>back</button>
                                    <button className='scale-90 w-72 h-16 rounded-2xl bg-green-400 hover:scale-110 transition-all' type="submit">next</button>
                                </div>
                            </form>
                        </div>
                    </>
                )}

                {view === 2 && (
                    <CenteredLoader />
                )}
            </div>
        </div>
    )
}
