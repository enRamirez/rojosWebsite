import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscrition-heading'>Sign-up to receive out newest inventory</p>
            <p className='footer-subscrition-text'>You can unsubscribe at any time.</p>
            <div className='input-areas'>
                <form>
                    <input  className='footer-input' type='email' name='email' placeholder='Your Email' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/Contacts'>Contacts</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Inventories</h2>
                    <Link to='/pottery'>Pottery</Link>
                    <Link to='/metal'>Metal</Link>
                    <Link to='/knickknack'>Knick-knacks</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer