import React, { useState } from 'react'
import Filter from './filter'
import PriceFilter from './PriceFilter'
export default function FilterContainer() {
  const [maxprice , setMaxPrice]=useState('')  
  const [minprice , setMinPrice]=useState('')
  return (
    <>
    <div className="flex mt-10">
        <PriceFilter setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
        <Filter maxprice={maxprice} minprice={minprice} />
    </div>
    </>
  )
}
