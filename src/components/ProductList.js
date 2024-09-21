import React from 'react';
import Product from './Product';

// Dummy data for products
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Headphones', price: 199 },
  { id: 3, name: 'Smartphone', price: 799 }
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
