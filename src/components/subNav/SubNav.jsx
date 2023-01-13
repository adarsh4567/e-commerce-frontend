import React from 'react'
import  {subNavData}  from '../../helper/dummy_data'
import './subNav.css';

const SubNav = () => {
  return (
    <div className='new_nav'>
    <div className='nav_data'>
      <div className='left_data'>
        {subNavData.map((data)=>(
          <p>{data}</p>
        ))}
      </div>
    </div> 
    </div>
  )
}

export default SubNav