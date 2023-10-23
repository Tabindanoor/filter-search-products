import React from 'react'

const Slider = ({handleChange, category}) => {
  return (
    <div className='cursor-pointer'>
    <div className='flex flex-col text-start w-full ' >
        <b>Category</b>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='category' />
        <span></span>ALL
      </label>

      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='category' />
        <span>Sneakers</span>
      </label>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='category' />
        <span>Flat</span>
      </label>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='category' />
        <span>Sandles</span>
      </label>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='category' />
        <span>Heals</span>
      </label>
    </div>

<br /><br />

    <div className='flex flex-col text-start' >
        <b>Price</b>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='price' />
        <span></span>ALL
      </label>

      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='price' />
        <span>Sneakers</span>
      </label>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='price' />
        <span>Flat</span>
      </label>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='price' />
        <span>Sandles</span>
      </label>
      <label htmlFor=""> 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} name='price' />
        <span>Heals</span>
      </label>
    </div>


<br />

    <div className='flex flex-col text-start ' >
        <b>Colors</b>
      <label htmlFor=""> 
        <input type="radio"  onChange={(e)=>handleChange(e)} value={category}  name="radio"/>
        <span></span>ALL
      </label>

      <label htmlFor="" > 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category} className='text-black' name="radio"  />
        <span>Black</span>
      </label>
      <label htmlFor="" > 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category}  name="radio" />
        <span>Blue</span>
      </label>
      <label htmlFor="" > 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category}  name="radio" />
        <span>Red</span>
      </label>
      <label htmlFor="" > 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category}  name="radio" />
        <span>Green</span>
      </label>
      <label htmlFor="" > 
        <input type="radio" onChange={(e)=>handleChange(e)} value={category}  name="radio" />
        <span>White</span>
      </label>
    </div>
    </div>
  )
}

export default Slider
