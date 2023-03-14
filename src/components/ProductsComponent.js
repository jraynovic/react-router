import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductsComponent = () => {
  const navigate = useNavigate()

  const products = [
    {title:"blueberry", type:'pie',id:1},
    {title:"chocolate", type:'pie',id:2},
    {title:"marble", type:'cake',id:3},
    {title:"icecream", type:'cake',id:1},
  ]

  return (
    <div>
      <h1>Products</h1>
      <p>This could be a spot to display all available products.</p>
      <p>When a product is selected we could go to /products/id</p>
      <p>alternatively a user could go to base url/products/5 and display this component</p>
      {products.slice(0,2).map(product=> {
        return <div><button onClick={()=>navigate(`/products/${product.id}`)}>{product.title}</button></div>
      })}
      <div>Double Params</div>
      {products.slice(2,4).map(product=> {
        return <div><button onClick={()=>navigate(`/products/${product.type}/${product.id}`)}>{product.title}</button></div>
      })}
    </div>
  )
}
export default ProductsComponent