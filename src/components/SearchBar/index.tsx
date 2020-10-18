import React, { useState, useCallback, ChangeEvent, useEffect } from 'react';

import Icon from '../../assets/Icons/icon-magnifier-grey.svg';

import { addMoviesSearchedRequest } from '../../store/modules/movies/moviesActions';

import { useDispatch } from 'react-redux';

/* import { FiSearch } from 'react-icons/fi'; */

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const [inputMovie, setInputMovie] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputMovie(e.target.value);
  }, []);

  useEffect(() => {
    if (inputMovie) {
      dispatch(addMoviesSearchedRequest(inputMovie));
    }
  }, [inputMovie, dispatch]);

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
