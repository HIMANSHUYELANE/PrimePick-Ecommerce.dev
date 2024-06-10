import React from 'react'
import { Category } from '../Data'
import Ctegories from './Ctegories'

export default function CategoryContainer() {
  return (
    <div className="flex overflow-hidden md:justify-evenly gap-4">
    {Category.map((cat) => {
      // console.log(cat)
      return <Ctegories 
      key={cat.id}
      title={cat.title}
      img={cat.cover} />
    })}
  </div>
  )
}
