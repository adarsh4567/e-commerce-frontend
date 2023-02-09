import React from 'react'
import {MdDelete} from 'react-icons/md'

const Options = () => {
  return (
    <div className='add_remove_select'>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div className='baseItems'>
      <div className='removeItem'>
        <div className='removeText'>Remove Item</div>
        <div className='removeIcon'><MdDelete style={{marginTop:'5px'}}/></div>
      </div>
      <div className='saveItem'>Save for Later</div>
      </div>
      <h3 className='item_price'>₹1139</h3><span></span>
    </div>
  )
}

export default Options
