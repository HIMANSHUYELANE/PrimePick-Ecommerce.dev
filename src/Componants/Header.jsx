import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

export default function Header({setShow}) {
  return (
    <div className="flex justify-between align-middle my-2
     ">
        <div>
          <p onClick={()=>setShow(true)} className="font-bold text-4xl text-fuchsia-700 mx-3">PrimePicks</p>
        </div>
        <div className="flex text-3xl space-x-3 text-fuchsia-600 self-center mx-5 ">
        
          <p><TiShoppingCart onClick={()=>setShow(false)} /></p>
    
          <p><MdAccountCircle /></p>
        </div>
    </div>
  );
}
