import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { useState } from 'react';
import { product } from './product';
function App() {
  const [openProduct,setOpenProduct]=useState('url');
  function openProd(){
    
  }
  return (
    <div className="App">
      <Navbar/>
      {product.map((item)=>(
        <Card src={item.src} alt={item.alt} title={item.title} description={item.description} cost={item.cost} onclick={openProd}/>
      ))}
    </div>
  );
}

export default App;
