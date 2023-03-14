import React from 'react'
import { useNavigate } from 'react-router-dom';


const HomeComponent = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>HomeComponent</h1>
        <div>
           <a href={`/products`}>Products</a> 
        </div>
        <div style={{marginTop:5}}>
           <button onClick={()=>navigate('/products')}>Products</button> 
        </div>
        
        
    </div>
  )
}

export default HomeComponent
