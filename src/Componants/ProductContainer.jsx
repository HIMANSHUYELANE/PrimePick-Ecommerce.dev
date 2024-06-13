import React, { useState } from "react";
import { products } from "../Data";
import { Category } from "../Data";
import ProductCard from "./ProductCard";
import Ctegories from "./Ctegories";
export default function ProductContainer({search }) {
  // console.log(products)
  const [prods, setProds] = useState('');
  return (
    <>
      
      <div  className="flex flex-wrap justify-evenly gap-8 mx-5">
        {products.filter((product)=>
               product.name.toLowerCase().includes(search)
        ).map((product) => {
          // console.log(product)
          if(product.length === 0){
            console.log("not found")
          }
          return (
            <>
              <div>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  dist={product.discount}
                  cover={product.cover}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
