import React from 'react'
import { useParams } from 'react-router-dom';

const DoubleParamsComponent = () => {
    const { type, id } = useParams();
  return (
    <div>
        <h1>Double Params</h1>
        <p>What if we wanted to search for /type/id?</p>
        <p>We could use both params from this url, {type}/{id}</p>
        DoubleParamsComponent
    </div>
  )
}
export default DoubleParamsComponent