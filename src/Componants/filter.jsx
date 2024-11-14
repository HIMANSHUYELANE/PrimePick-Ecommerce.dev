import React from "react";
import { products } from "../Data";
import { useParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import Header from "./Header";

export default function filter({minprice,maxprice,allprice}) {
  let params = useParams().category;
//   console.log("HImanshu");
console.log(allprice)
//   console.log(params);
  return (
    <>
    <div className="flex flex-wrap justify-evenly gap-12 my-10">
      {
        products.filter((product)=>
            product.category.toLowerCase().includes(params)
      ).filter((product)=>
            (minprice === '' || product.price <= maxprice && product.price >= minprice  || product.price < allprice )
       ).map((product)=>{
            return(
                <>
              <div className="">
                <CategoryProduct
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
    </>
  );
}
