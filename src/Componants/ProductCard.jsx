import React from "react";
import { FaCartArrowDown } from "react-icons/fa";

export default function ProductCard({id, name, dist, price, category, cover ,handle , item }) {
  // console.log(item)
  return (
    <>
      
        <div key={id} className=" w-[200px] h-[320px] bg-white rounded-lg">
        <FaCartArrowDown onClick={()=>handle(item)} className="float-end text-lg" />
          <div className="h-48  overflow-hidden p-2">
            <img className="h-44 mx-auto" src={cover} alt="" />
          </div>
          <div className="px-3">
            <p className="font-bold">{name}</p>
            <p className="font-semibold">₹ {price}.00</p>
            <p className="">{category}</p>
            <p className="text-green-600">{dist} off</p>
          </div>
        </div>
      
    </>
  );
}
