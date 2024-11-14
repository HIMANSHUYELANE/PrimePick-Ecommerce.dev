import React, { useState } from "react";
import ProductContainer from "./ProductContainer";
import Search from "./Search";
import CategoryContainer from "./CategoryContainer";
import Slider1 from "./Slider1";
import Header from "./Header";
import Cart from "./Cart";
import Page from "./Page";

export default function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [show , setShow]=useState(true)

  const handle = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
  return (
    <>
      <div className="">
        <Header setShow={setShow}/>
        <Page />
        <Slider1 />
      </div>
      {
        show ? <div>
          <CategoryContainer />
          <Search setSearch={setSearch} />
          <ProductContainer search={search} handle={handle} />
        </div> : <div><Cart /></div>
      }
    </>
  );
}
