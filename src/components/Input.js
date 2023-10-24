import React from 'react'

const Input = ({handleChange,color, title, value, name}) => {
  console.log(handleChange, color, title, value, name)

  return (
    <div>
    
<label htmlFor="">

  
<span style={{backgroundColor:`${color}`}}><input type="radio"
           name={name} 
           id=""
           value={value} 
           title={title}
           onChange={handleChange}
            /></span>{title}
</label>

    </div>
  )
}

export default Input
