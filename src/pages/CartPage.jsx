import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems] = useState([
    { id: 1, name: 'Espresso', price: 150 },
    { id: 2, name: 'Cappuccino', price: 180 },
  ]);

  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
