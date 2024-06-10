import React from 'react'
import { products } from '../Data'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'
export default function Mobile() {
  const params =useParams().Mobile
  
  return (
    <div>
      {
        products.filter((product)=>{
            return(
                <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                dist={product.discount}
                cover={product.cover}
                 />
            )
        })
      }
    </div>
  )
}
