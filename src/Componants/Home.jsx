import React, { useState } from "react";
import ProductContainer from "./ProductContainer";
import Search from "./Search";
import CategoryContainer from "./CategoryContainer";
import Slider1 from "./Slider1";

export default function Home() {
  const [search , setSearch]=useState('')
  return (
    <>
    

    <Slider1 />
      <CategoryContainer />
      <div className="">
        
      <Search setSearch={setSearch} />
      <ProductContainer search={search}  />
      </div>
  
    </>
  );
}
