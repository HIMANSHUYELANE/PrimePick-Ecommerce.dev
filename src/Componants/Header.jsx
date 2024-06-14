import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex justify-between align-middle my-2
     ">
        <div>
          <p className="font-bold text-4xl text-fuchsia-700 mx-3">PrimePicks</p>
        </div>
        <div className="flex text-3xl space-x-3 text-fuchsia-600 self-center mx-5 ">
          <p><TiShoppingCart /></p>
          <p><MdAccountCircle /></p>
        </div>
    </div>
  );
}
