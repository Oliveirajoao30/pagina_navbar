// Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #f0a500;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>MyLogo</Logo>
      <NavLinks>
        <NavLink href="#home">Inicio</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;


