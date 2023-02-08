import React from 'react'

const Options = () => {
  return (
    <div className='add_remove_select'>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{cursor:"pointer"}}>Remove Item</p><span></span>
      <p className='forremovemedia'>Save Or Later</p><span></span>
      <h3 className='item_price'>₹1139</h3><span></span>
    </div>
  )
}

export default Options
