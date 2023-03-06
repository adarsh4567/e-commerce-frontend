import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerImages } from '../../helper/helper_data'
import './banner.css'

const Banner = ({isSubBanner,subBannerImages}) => {
  return (
    <>
     <Carousel
     className='carasousel'
     duration={1000}
     autoPlay={true}
     animation='fade'
     indicators={isSubBanner ? true:false}
     navButtonsAlwaysVisible={false}
     cycleNavigation={true}
     >
      {(subBannerImages ? subBannerImages:bannerImages).map((pic,i)=>{
        return(
          <img key={i} src={pic} alt='img' className='banner_img'/>
        ) 
      })}
     </Carousel>
    </>
  )
}

export default Banner