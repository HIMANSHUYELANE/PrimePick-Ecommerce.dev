import React from 'react'
import { Category } from '../Data'
import Ctegories from './Ctegories'

export default function CategoryContainer({i}) {
  
  return (

      // <Slider {...settings}>
    <div key={i} className="flex justify-evenly md:gap-4">
    {Category.map((cat) => {
      // console.log(cat)
      return (
        <Ctegories
        id={cat.id}
        title={cat.title.toLowerCase()}
        img={cat.cover} />
        )
        })}
  </div>
//  </Slider>
  )
}
