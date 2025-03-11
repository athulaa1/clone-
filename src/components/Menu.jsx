import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const MenuItem = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  background-color: #f4f4f4;
`;

const Menu = ({ items }) => (
  <MenuContainer>
    {items.map(item => (
      <MenuItem key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>\u20B9{item.price}</p>
      </MenuItem>
    ))}
  </MenuContainer>
);

export default Menu;
