import './App.css';
import Slider from './components/Slider';
import Nav from './components/Nav';
import Products from './components/Products';
import { useState } from 'react';
import data from './components/Data/Products';
import Input from './components/Input';
import Card from './components/Card';
function App() {


  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")

  const handleInputChange=(e)=>{
    setQuery(e.target.value)
  }

  const handleChange=(e)=>{
    setCategory(e.target.value)
  }

  const handleClick=(e)=>{
    setCategory(e.target.value)
  }


const filterItems = data.filter((data)=>data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)


const FetchData = (products, selected , query) =>{
  let myData = products
  if(query){
    myData = filterItems
  }
  if(selected){
    myData = myData.filter(({category, color, company,  title, newPrice})=>
        category === selected ||
         color === selected || 
         title === selected || 
         company === selected ||
        newPrice === selected 
    )  
  }
  
   return myData.map(({category,title,company,color,newPrice,prevPrice,reviews,img,star})=>
   <div className=''> 
   <Card    
       category={category}
      title={title}
      company={company}
      color={color}
      newPrice={newPrice}
      prevPrice={prevPrice}
      reviews={reviews}
      img={img}
      start={star}
      />
      </div>
      
    )
}

const result=FetchData(data,category,query)



  return (
    <div className="App flex-col flex p-10 sm:flex-row">
    <div  className='w-[20%]'>
      {/* i am tabinda nooor  */}
     <Slider handleChange={handleChange} />
    </div>
    <div className='w-[80%]'>
        <Nav handleInputChange={handleInputChange} query={query} />
      <Products handleClick={handleClick} result={result} />
    </div>
    </div>
  );
}

export default App;
