import React from 'react'
import Input from './Input'

const ColorCategory = ({handleChange}) => {
  return (
    <div className='mt-10'>

      <label htmlFor="">

        <input type="radio"  name="test1"   className='bg-[#833ab4] ' onChange={handleChange}  id=""
         />
        <span ></span>All
      </label>

      <Input handleChange={handleChange}
            color="black"
            value="black"
            title="black"
            name="test1"   />

<Input handleChange={handleChange}
            color="blue"
            value="blue"
            title="blue"
            name="test1"   />

<Input handleChange={handleChange}
            color="green"
            value="green"
            title="green"
            name="test1"   />

<Input handleChange={handleChange}
            color="red"
            value="red"
            title="red"
            name="test1"   />

<Input handleChange={handleChange}
            color="white"
            value="white"
            title="white"
            name="test1"   />
            
    </div>
  )
}

export default ColorCategory
