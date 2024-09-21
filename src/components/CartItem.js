import React from 'react';

const CartItem = ({ item, updateCart, removeFromCart }) => {
  return (
    <div style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>
        Quantity:
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateCart(item.id, parseInt(e.target.value))}
        />
      </p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
