import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo-3.png'
<<<<<<< HEAD
import SearchIcon from '@mui/icons-material/Search';

=======
>>>>>>> 498ebe97b0e76e4d32ad2d095333b9825b9bc5a1
const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                    <img src={logo} alt='Not loaded'/>
                </div>
<<<<<<< HEAD
               <SearchIcon id='fantom'/>
=======
>>>>>>> 498ebe97b0e76e4d32ad2d095333b9825b9bc5a1
            </div>
            <div className='right'></div>
        </nav>
    </header>
  )
}

export default Navbar