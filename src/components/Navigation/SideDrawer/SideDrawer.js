import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled, { css } from 'styled-components';

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    & {
      display: none;
    }
  }

  ${props =>
    props.Open &&
    css`
      transform: translateX(0);
    `} ${props =>
    props.Close &&
    css`
      transform: translateX(-100%);
    `};
`;

const sideDrawer = ({ ...props }) => {
  return (
    <StyledSideDrawer>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </StyledSideDrawer>
  );
};

export default sideDrawer;