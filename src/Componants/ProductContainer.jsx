import React, { useState } from "react";
import { products } from "../Data";
import { Category } from "../Data";
import ProductCard from "./ProductCard";
import Ctegories from "./Ctegories";
export default function ProductContainer({search ,i}) {
  // console.log(products)
  const [prods, setProds] = useState('');
  return (
    <>
      
      <div key={i} className="flex flex-wrap justify-evenly gap-8 mx-5">
        {products.filter((product)=>
               product.name.toLowerCase().includes(search)
        ).map((product) => {
          // console.log(product)
          return (
            <>
              <div>
                <ProductCard
                  key={product.id}
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
