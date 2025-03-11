import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const Cart = ({ cartItems }) => (
  <CartContainer>
    <h2>Your Cart</h2>
    {cartItems.map((item, index) => (
      <CartItem key={index}>
        <span>{item.name}</span>
        <span>₹{item.price}</span>
      </CartItem>
    ))}
    <h3>Total: ₹{cartItems.reduce((total, item) => total + item.price, 0)}</h3>
  </CartContainer>
);

export default Cart;
