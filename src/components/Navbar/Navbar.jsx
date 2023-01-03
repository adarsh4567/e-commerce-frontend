import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo-3.png'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                    <img src={logo} alt='Not loaded'/>
                </div>
               <SearchIcon id='fantom'/>
            </div>
            <div className='right'></div>
        </nav>
    </header>
  )
}

export default Navbar