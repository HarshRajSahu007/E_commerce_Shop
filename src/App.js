import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    const itemIndex = cart.findIndex(item => item.id === product.id);
    if (itemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle updating the cart
  const updateCart = (id, quantity) => {
    const updatedCart = cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
  };

  // Function to remove items from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Ecart Shop</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;

