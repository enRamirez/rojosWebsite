import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import Front from '../images/frontCard.jpg'
import Back from '../images/backCard.jpg'

export default function Contacts() {
    return (
        <>
            <div>
                <h1 className='contacts'>CONTACTS</h1>
            </div>
            <div className='image'>
                <img src={Front} alt='Bussiness Card' />
                <img src={Back} alt='Bussiness Card' />
            </div>
            <div>
                <p className='location'>Address: 6802 E US HWY 84, Gatesville, Tx 76528</p>
                <p className='phone'>Phone Number: (254) 223-0059 or (254) 216-2417 </p>
                {/* <p className='website'>TBD </p> */}
            </div>
            <Footer />
        </>
    )
}