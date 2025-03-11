import React from 'react';
import styled from 'styled-components';

// Styled components for layout and cards
const HomeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color: #555;
  text-align: center;
  margin-bottom: 40px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const MenuCard = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MenuImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const MenuTitle = styled.h3`
  margin-top: 15px;
  font-size: 18px;
  color: #333;
`;

const MenuDescription = styled.p`
  font-size: 14px;
  color: #777;
`;

const MenuPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #e52d27;
  margin-top: 10px;
`;

const Home = () => {
  // Sample data for the menu items
  const menuItems = [
    { id: 1, name: 'Espresso', description: 'Strong coffee with rich flavor', price: 150, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.dByRjIi_hqH-mFGU4-mkPwHaE8&pid=Api&P=0&h=180' },
    { id: 2, name: 'Cappuccino', description: 'Coffee with steamed milk and foam', price: 180, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.1GZjacd3VZGjNbTXgWqffAHaE8&pid=Api&P=0&h=180' },
    { id: 3, name: 'Latte', description: 'Coffee with a blend of steamed milk', price: 170, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.6Lb2xzBM3B6maFHPDwhw5AHaE8&pid=Api&P=0&h=180' },
    { id: 4, name: 'Americano', description: 'Coffee made with espresso and hot water', price: 160, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.8ecQTrsnkrbtmgEYOC38dwHaE6&pid=Api&P=0&h=180' },
    { id: 5, name: 'Mocha', description: 'Chocolate-flavored coffee drink', price: 200, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.NIGztMbdYyH2mmXHUiw6QgHaE8&pid=Api&P=0&h=180' },
    { id: 6, name: 'Macchiato', description: 'Espresso with a dash of milk', price: 180, imageUrl: 'https://aboveaveragecoffee.com/wp-content/uploads/2021/05/Espresso-Macchiato-What-it-is-how-to-make-it-how-it-tastes.jpg' },
    { id: 7, name: 'Flat White', description: 'Espresso with steamed milk', price: 170, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.Wi3VPYmAgLWtbLKhSasRfAHaE8&pid=Api&P=0&h=180e' },
    { id: 8, name: 'Affogato', description: 'Espresso over a scoop of vanilla ice cream', price: 220, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.qV0crGT0Fjhp-tHLT8cwpQHaE8&pid=Api&P=0&h=180' },
    { id: 9, name: 'Cold Brew', description: 'Coffee brewed cold for a smooth taste', price: 150, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.t0un9dSHe8dYP5FRGBRk6QHaE8&pid=Api&P=0&h=180' },
    { id: 10, name: 'Nitro Coffee', description: 'Cold brew infused with nitrogen', price: 250, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.DlH0HaxIlRCP9znPTVn59AHaE7&pid=Api&P=0&h=180' },
    { id: 11, name: 'Irish Coffee', description: 'Coffee mixed with Irish whiskey', price: 280, imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.a7hlOZtENSKZlX9dScXBMgHaE8&pid=Api&P=0&h=180' },
    { id: 12, name: 'Turkish Coffee', description: 'Strong, unfiltered coffee', price: 220, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.43ArurfyTKJJRy60sbSX2QHaE7&pid=Api&P=0&h=180' },
    { id: 13, name: 'Iced Latte', description: 'Cold coffee with milk', price: 190, imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.s6B5UEIjv-OvTOF-tl2xmgHaE7&pid=Api&P=0&h=180' },
    { id: 14, name: 'Iced Mocha', description: 'Iced coffee with chocolate and milk', price: 210, imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.3knYAvcr0w7J8IZCem2XOgHaE8&pid=Api&P=0&h=180' },
    { id: 15, name: 'Cortado', description: 'Equal parts espresso and steamed milk', price: 160, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.-wsr8zPMBWr7e_B_68k16QHaE8&pid=Api&P=0&h=180' },
    { id: 16, name: 'Café au Lait', description: 'Coffee with hot milk', price: 170, imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.TfmGmwz3Evcqth2kfD01RAHaEK&pid=Api&P=0&h=180' },
  ];

  return (
    <HomeContainer>
      <Title>Cafe Coffee Day</Title>
      <Subtitle>Introducing Our All-New Summer Beverage Range</Subtitle>
      <MenuGrid>
        {menuItems.map(item => (
          <MenuCard key={item.id}>
            <MenuImage src={item.imageUrl} alt={item.name} />
            <MenuTitle>{item.name}</MenuTitle>
            <MenuDescription>{item.description}</MenuDescription>
            <MenuPrice>₹{item.price}</MenuPrice>
          </MenuCard>
        ))}
      </MenuGrid>
    </HomeContainer>
  );
};

export default Home;
