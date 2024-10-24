import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return (
    <div>
      <h1>This is the Product Page</h1>
      <h2>Product ID: {productId}</h2>
    </div>
  )
}

export default Product;