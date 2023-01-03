import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo-3.png'
const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                    <img src={logo} alt='Not loaded'/>
                </div>
            </div>
            <div className='right'></div>
        </nav>
    </header>
  )
}

export default Navbar