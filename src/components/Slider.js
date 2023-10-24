
import React from 'react'
import ShoeCategory  from './ShoeCategory'
import PriceCategory from './PriceCategory'
import ColorCategory from './ColorCategory'

const Slider = ({handleChange}) => {
  return (
    <div className='text-start'>
      <ShoeCategory  handleChange={handleChange}/>
      <PriceCategory  handleChange={handleChange}/>
      <ColorCategory  handleChange={handleChange}/>
    </div>
  )
}

export default Slider
