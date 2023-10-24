import React from 'react'
import data from './Data/Products'
import Buttons from './Buttons'

const Products = ({handleClick,result,category}) => {
        // console.log(result)
  return (
    <div className=' ' >
    <div className='flex justify-between'>
    <Buttons handleClick={handleClick} value=""  title="all" />
    <Buttons handleClick={handleClick} value="Nike" title="Nike" />
    <Buttons handleClick={handleClick} value="Adidas" title="Adidas"/>
    <Buttons handleClick={handleClick} value="Puma" title="Puma"/>
    <Buttons handleClick={handleClick} value="Vans" title="Vans" /> 
    </div>
    <br />
            {/* <div className=' grid grid-cols-4 gap-6'>
                {data.map((product,index)=>{
                    return (
                        <div key={index}>

                            <div className="max-w-sm h-[320px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>

        
  <img src={product.img}  className='w-[300px] h-[100px] text-center ' alt="" />
                            <p>{product.category} <b>{product.color}</b></p>
                            <b>{product.company} </b>
                            <p className=' text-center flex center justify-center text-yellow-500' >{product.star}{product.star}{product.star}{product.star} </p>
                            <p><del>{product.prevPrice}</del> ${product.newPrice}</p>
                            <p>{product.reviews} </p>
                            <p>{product.title} </p>
                            
</div>
                        </div>
                    )
                })}
            </div> */}
            <div className='grid-cols-4' >
                  {result} 
            </div>
         
    </div>
  )
}

export default Products
