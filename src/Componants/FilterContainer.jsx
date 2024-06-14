import React, { useState } from 'react'
import Filter from './filter'
import PriceFilter from './PriceFilter'
export default function FilterContainer() {
  const [maxprice , setMaxPrice]=useState('')  
  const [minprice , setMinPrice]=useState('')
  const [allprice ,setAllPrice]=useState('')
  return (
    <>
    <div className="flex mt-10">
        <PriceFilter setAllPrice={setAllPrice} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
        <Filter allprice={allprice} maxprice={maxprice} minprice={minprice} />
    </div>
    </>
  )
}
