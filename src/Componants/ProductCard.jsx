import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ name, dist, price, category, cover }) {
  return (
    <>
      
        <div className=" w-[200px]">
        <FaCartArrowDown className="float-end text-lg" />
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
