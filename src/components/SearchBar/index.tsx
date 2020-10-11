import React, { useState, useCallback, ChangeEvent, useEffect } from 'react';

import Icon from '../../assets/Icons/icon-magnifier-grey.svg';
import api from '../../services/api';

/* import { FiSearch } from 'react-icons/fi'; */

import { Container } from './styles';

interface MovieResponseProps {
  Response: string;
  Search: [MovieProps];
}

interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const SearchBar: React.FC = () => {
  const [inputMovie, setInputMovie] = useState('');
  const [moviesSearched, setMoviesSearched] = useState<MovieProps[]>([]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputMovie(e.target.value);
  }, []);

  useEffect(() => {
    if (inputMovie) {
      api
        .get<MovieResponseProps>(
          `?apikey=${process.env.REACT_APP_API_OMDb_SECRET}&s=${inputMovie}`,
        )
        .then(response => {
          console.log(response.data);
          if (response.data.Response === 'False') {
            setMoviesSearched([]);
          }
          setMoviesSearched(response.data.Search);
        })
        .catch(err => {
          console.log('Do something about this error: ', err);
        });
    }
  }, [inputMovie]);

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
