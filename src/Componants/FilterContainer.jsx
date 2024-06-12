import React, { useState } from 'react'
import Filter from './filter'
import PriceFilter from './PriceFilter'
export default function FilterContainer() {
    const [price , setPrice]=useState('')
  return (
    <>
    <div className="flex mt-10">
        <PriceFilter setPrice={setPrice} />
        <Filter price={price} />
    </div>
    </>
  )
}
