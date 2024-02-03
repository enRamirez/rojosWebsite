import React from 'react';
import './Cart.css';

const Cart = ({ cart = [], removeFromCart }) => {
  return (
    <div className='cartContainer'>
      <h2 className='shoppingCart'>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className='cartItem' style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
          <h3>{item.type}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;