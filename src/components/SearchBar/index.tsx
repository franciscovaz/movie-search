import React, { useState, useCallback, ChangeEvent } from 'react';

import Icon from '../../assets/Icons/icon-magnifier-grey.svg';

/* import { FiSearch } from 'react-icons/fi'; */

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const [inputMovie, setInputMovie] = useState('');
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputMovie(e.target.value);
  }, []);

  return (
    <Container>
      <img src={Icon} alt="Search" />
      {/* <FiSearch size={16} /> */}
      <input
        type="text"
        placeholder="Search movies..."
        value={inputMovie}
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default SearchBar;
