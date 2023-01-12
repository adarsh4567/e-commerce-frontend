import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo-3.png'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge'
import {ShoppingCart} from '@mui/icons-material';
import { Button } from '@mui/material';
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
                <div className='navlogo'>
                    <img src={logo} alt='Not loaded'/>
                </div>
               <div className='nav_searchbaar'>
                <input type='text' name='' id=''/>
                <div className='search_icon'>
                <AiOutlineSearch style={{fontWeight:'800',fontSize:'1.5rem'}}/>
               </div>
               </div>
            </div>
            <div className='right'>
              <div className='nav_btn'>
                <Button variant='outline'>Sign In</Button>
              </div>
              <div className='cart_btn'>
                <Badge badgeContent={4} color='primary'>
                  <ShoppingCart id='icon' style={{color:'white'}} />
                </Badge>
                <p>Cart</p>
              </div>
              <Avatar className='avtar'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar