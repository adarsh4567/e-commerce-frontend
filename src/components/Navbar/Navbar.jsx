import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo-3.png'
import SearchIcon from '@mui/icons-material/Search';

// wskdnjsnd

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                    <img src={logo} alt='Not loaded'/>
                </div>
                <div className="nav_Searchbar">
                  <input type= "text" name="" id="" />
                  <div className="search_icon">
                    <SearchIcon id='search`' />
                  </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar