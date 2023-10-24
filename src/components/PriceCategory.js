import React from 'react'
import Input from './Input'

const PriceCategory = ({handleChange}) => {
  return (
    <div>
        <label htmlFor="">
            <input type="radio" onChange={handleChange} name="test2" id="" />
            <span></span>All
        </label>

    <Input 
    handleChange={handleChange}
    value={50} 
    title="$0 - 50"
    name="test2"
    />

<Input 
    handleChange={handleChange}
    value={100} 
    title="$50 - 100"
    name="test2"
    />

<Input 
    handleChange={handleChange}
    value={150} 
    title="$100 - 150"
    name="test2"
    />

<Input 
    handleChange={handleChange}
    value={200} 
    title="Above $150"
    name="test2"
    />
        
    </div>
  )
}

export default PriceCategory
