import React from 'react';
import { Container } from './styles';

import logo from '../../assets/Logos/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="movieLogo" />
    </Container>
  );
};

export default Header;
