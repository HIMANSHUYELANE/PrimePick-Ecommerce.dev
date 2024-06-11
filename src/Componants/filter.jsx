import React from "react";
import { products } from "../Data";
import { useParams } from "react-router-dom";
import Mobile from "./Mobile";
import ProductCard from "./ProductCard";

export default function filter() {
  let params = useParams().category;
//   console.log("HImanshu");
//   console.log(params);
  return (
    <div className="flex flex-wrap justify-evenly gap-12">
      {
        products.filter((product)=>
            product.category.toLowerCase().includes(params)
        ).map((product)=>{
            return(
                <>
              <div className="">
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  dist={product.discount}
                  cover={product.cover}
                />
              </div>
              {/* <h1>himanshu</h1> */}
            </>
            )
        })
      }
      {/* <h1>HImanhsu</h1> */}
    </div>
  );
}
