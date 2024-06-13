import React from 'react'
import { Category } from '../Data'
import Ctegories from './Ctegories'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CategoryContainer({i}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
      // <Slider {...settings}>
    <div key={i} className="flex overflow-hidden md:justify-evenly gap-4">
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
    // </Slider>
  )
}
