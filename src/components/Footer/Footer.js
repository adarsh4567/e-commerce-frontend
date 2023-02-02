import React from 'react'
import "./Footer.css"


const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer>
      <div className='footer_container'>
        <div className='footer_detail_one'>
            <h3>Get To Know Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Release</p>
            <p>E-Town Cares</p>
        </div>
        <div className='footer_detail_one'>
            <h3>Connect With Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
        <div className='footer_detail_one forres'>
            <h3>Make Money With Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Release</p>
            <p>E-Town Cares</p>
        </div>
        <div className='footer_detail_one forres'>
            <h3>Make Money With Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Release</p>
            <p>E-Town Cares</p>
        </div>
      </div>
      <div className="lastdetails">
               <p>eTown</p>
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, e-town.vercel.app, Inc. or its affiliates</p>
            </div>
    </footer>
  )
}

export default Footer
