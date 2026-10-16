
import React from 'react'

const Product = ({ products }) => {
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"auto auto auto",
    }}>
      {products.map((products) =>
        <div style={{
            border:"2px solid black",
            textAlign:"center"
        }}>
          <img src={products.thumbnail} alt={products.title} />
          <h1>{products.title}</h1>
          <p>{products.description}</p>
          <h2>{products.price}</h2>
          <h2>{products.rating}</h2>
        </div>
      )}
    </div>
  )
}

export default Product