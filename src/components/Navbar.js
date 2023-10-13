import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, seButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            seButton(false)
        } else {
            seButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                R O J O ' S
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link to='/inventory' className='nav-links' onClick={closeMobileMenu}>
                    Inventory
                    </Link>
                </li> */}
                <li className='nav-item'>
                    <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                        Contacts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                <li className='nav-item'>
                    <Link to='/Cart'>
                        <ShoppingCart size={40} color='white'/>
                    </Link>
                </li>
        </div>
    </nav>
    </>
  )
}

export default Navbar