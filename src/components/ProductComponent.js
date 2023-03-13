import React from 'react'
import { useParams } from 'react-router-dom';

const ProductComponent = () => {
    const { id } = useParams();
  return (
    <div>Inividual ProductComponent with {id}</div>
  )
}

export default  ProductComponent
