import Navbar from '@/components/Nav'
import React from 'react'

export default function AfterPaymentConfirmation() {
    return (
        <div>
            <Navbar />
            <div className='ml-24'>
                <h1 className='font-epic font-bold text-5xl mt-20'>Thank You!</h1>
                <p className='font-epic text-2xl mt-3'>We just need a few more details to setup your organization's profile</p>
                <br />
                <br />
                <p>What's the name of your school/university?</p>

                <br />
                <br />
                <p>What's the official email ID of your school/university?</p>

                <br />
                <br />
                <p>What's the name of your school/university?</p>
            </div>
        </div>
    )
}
