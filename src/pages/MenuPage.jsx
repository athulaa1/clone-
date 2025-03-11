import React from 'react';
import Menu from '../components/Menu';

const MenuPage = () => {
  const menuItems = [
    { id: 1, name: 'Espresso', description: 'Strong coffee', price: 150 },
    { id: 2, name: 'Cappuccino', description: 'Coffee with foam', price: 180 },
    { id: 3, name: 'Latte', description: 'Coffee with milk', price: 170 },
  ];

  return (
    <div>
      <h2>Our Menu</h2>
      <Menu items={menuItems} />
    </div>
  );
};

export default MenuPage;
