import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerImages } from '../../helper/dummy_data'
import './banner.css'

const Banner = ({isSubBanner,subBannerImages}) => {
  return (
    <>
     <Carousel
     className='carasousel'
     autoPlay={true}
     animation={isSubBanner ? 'fade':'slide'}
     indicators={isSubBanner ? true:false}
     navButtonsAlwaysVisible={isSubBanner ? false:true}
     cycleNavigation={true}
     navButtonsProps={{
      style:{
        background:'rgba(255, 255, 255,0.9)',
        color:'black'
      }
     }}
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