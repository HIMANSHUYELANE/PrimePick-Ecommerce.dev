import React from 'react'
import { useParams } from 'react-router-dom'

export default function PriceFilter({setPrice}) {
    const params=useParams().category
    console.log(params)
  return (
    <div className="bg-slate-200 px-4 py-10 space-y-5">
      <h1 className="text-xl font-bold">Price Filter</h1>
      <select name="" id="op-1" onChange={((e)=>{setPrice(e.target.value)})}>
        <option value="" hidden>Select Amount</option>
        <option value="10000">Less 10,000</option>
        <option value="20000">Less 20,000</option>
        <option value="30000">Less 30,000</option>
        <option value="40000">Less 40,000</option>
        <option value="50000">Less 50,000</option>
        <option value="60000">Less 60,000</option>
      </select>
    </div>
  )
}
