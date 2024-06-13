import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Slider1() {
  var settings = {
    dots: true,
    infinite: 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" w-[95%] mx-auto lg:h-[200px] md:h-[160px] xl:h-[250px]">
      <Slider {...settings}>
      <div className="">
        <img className='w-fit' src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0427f7dd5031f47a.jpg?q=20" alt="" />
      </div>
      <div>
        <img className="w-[100%]" src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/7ed27f60078267c6.jpg?q=50" alt="" />
      </div>
      <div>
        <img className="w-[100%]" src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/c4d944eceb52f571.jpg?q=50" alt="" />
      </div>
      <div>
        <img className="w-[100%]" src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/5bd1462b62aab134.jpg?q=50" alt="" />
      </div>
      <div>
        <img  className="w-[100%]" src="https://rukminim2.flixcart.com/flap/50/50/image/45c7da48a2c911eb.jpg?q=50" alt="" />
      </div>
      <div>
        <img className="w-[100%]" src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/726168855d099041.jpg?q=50" alt="" />
      </div>
      </Slider>
    </div>
  )
}
