import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 18px;

    @media (max-width: 768px) {
      margin: 10px 0;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <Logo src="https://www.franchiseindia.com/uploads/news/fi/cafe-coffee-day-to-expand-intern-f0d072f0c4.gif" alt="Café Coffee Day" />
    </Link>
    <NavLinks>
      <Link to="/">Menu</Link>
      <Link to="/cart">Cart</Link>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
