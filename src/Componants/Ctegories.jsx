import React from "react";
import { Link } from "react-router-dom";
export default function Ctegories({title,id , img}) {
  return (
    <>
    <Link to={`/${title}`}>
     <div key={id} className="my-7 bg-violet-300  w-16	h-24 sm:w-24 flex items-center align-middle flex-col justify-center  lg:py-2 lg:w-44 lg:flex-row text-center">
        <div className="mx-auto lg:mx-0">
            <img className=" h-16 w-14 mix-blend-multiply" src={img} alt="" />
        </div>
        <div>
            <p className="font-normal sm:font-bold sm:text-lg text-sm">{title}</p>
        </div>
     </div>
     </Link>
    </>
  );
}
