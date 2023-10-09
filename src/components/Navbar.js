import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
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

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                Rojos Pottery
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'>
                    <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/inventory' className='nav-link' onClick={closeMobileMenu}>
                        Inventory
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contacts' className='nav-link' onClick={closeMobileMenu}>
                        Contacts
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar