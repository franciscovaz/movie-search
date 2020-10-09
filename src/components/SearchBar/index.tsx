import React from 'react';

import Icon from '../../assets/Icons/icon-magnifier-grey.svg';

/* import { FiSearch } from 'react-icons/fi'; */

import { Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <img src={Icon} alt="Search" />
      {/* <FiSearch size={16} /> */}
      <input type="text" placeholder="Search movies..." />
    </Container>
  );
};

export default SearchBar;
