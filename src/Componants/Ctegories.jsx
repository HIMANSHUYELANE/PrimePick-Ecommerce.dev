import React from "react";
import { Link } from "react-router-dom";
export default function Ctegories({title , img}) {
  return (
    <>
    <Link to={`/Category`} >
     <div className="my-7 bg-violet-200 font-bold	 flex items-center align-middle flex-col justify-center w-32 lg:py-2 sm:w-52 lg:w-72 lg:flex-row text-center">
        <div className="mx-auto lg:mx-0">
            <img className="w-20 mix-blend-multiply" src={img} alt="" />
        </div>
        <div>
            <p className="">{title}</p>
        </div>
     </div>
     </Link>
    </>
  );
}
