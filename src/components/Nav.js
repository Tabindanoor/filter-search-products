import React from 'react'

const Nav = ({handleInputChange, query}) => {
    // console.log(handleInputChange)
  return (
    <div  >
    <input  onChange={(e)=>{handleInputChange(e)}} type="text" className='w-3/4 p-4 rounded-xl border-gray-300 border ' placeholder='Search the name of the shoes'  value={query} name="" id="" />
 
    <br />
    <br />
   
    </div>
  )
}

export default Nav
