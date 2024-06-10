import React, { useState } from "react";
import ProductContainer from "./ProductContainer";
import Header from "./Header";
import Search from "./Search";
import CategoryContainer from "./CategoryContainer";

export default function Home() {
  const [search , setSearch]=useState('')
  return (
    <>
      <CategoryContainer />
      <Search setSearch={setSearch} />
      <ProductContainer search={search}  />
    </>
  );
}
