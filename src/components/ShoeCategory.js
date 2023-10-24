
import React from 'react'
import Input from './Input'

const ShoeCategory = ({handleChange}) => {
  return (
    <div className='mb-10'>

    <label htmlFor="">
        <input type="radio" name="test" title='' onChange={handleChange} value="" id="" /> 
        <span></span>  All 
    </label>  

    <Input handleChange={handleChange}
    value="sneakers"
    title="Sneakers"
    name="test" 
     />

<Input handleChange={handleChange}
    value="flats"
    title="flats"
    name="test"
     />

<Input handleChange={handleChange}
    value="heels"
    title="heels"
    name="test"
     />

<Input handleChange={handleChange}
    value="sandals"
    title="sandals"
    name="test"
     />


    

    </div>
  )
}

export default ShoeCategory
