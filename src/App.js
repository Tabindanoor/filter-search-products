import './App.css';
import Slider from './components/Slider';
import Nav from './components/Nav';
import Products from './components/Products';
import { useState } from 'react';
import data from './components/Data/Products';
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
  

  const productsData = data 
console.log(productsData)

  return (
    <div className="App flex p-10">
    <div  className='w-[20%]'>
     <Slider handleChange={handleChange} category={category} />
    </div>
    <div className='w-[80%]'>
        <Nav handleInputChange={handleInputChange} query={query} />
      <Products handleClick={handleClick} />
    </div>
     
      
    </div>
  );
}

export default App;
