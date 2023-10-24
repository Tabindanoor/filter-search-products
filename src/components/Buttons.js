import React from 'react'

const Buttons = ({handleClick,value,title}) => {
  return (
    <div>
        <button  className='rounded-2xl border border-blue-950 px-4 py-3 mx-3 w-full'
         onClick={handleClick}
          value={value}>
            {title}
        </button>
    </div>
  )
}

export default Buttons
