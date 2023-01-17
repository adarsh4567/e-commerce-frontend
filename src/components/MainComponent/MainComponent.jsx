import React from 'react'
import Banner from '../Banner/Banner'
import './mainComponent.css'
import Slide from '../slide/slide'

const MainComponent = () => {
  return (
    <>
    <div className='home_section'>
        <div className='banner_part'>
           <Banner/>
        </div>
        <Slide/>
    </div>
    </>
  )
}

export default MainComponent