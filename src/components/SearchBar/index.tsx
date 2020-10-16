import React, { useState, useCallback, ChangeEvent, useEffect } from 'react';

import Icon from '../../assets/Icons/icon-magnifier-grey.svg';
import api from '../../services/api';

import { addMoviesSearchedRequest } from '../../store/modules/movies/moviesActions';

import { useDispatch } from 'react-redux';

/* import { FiSearch } from 'react-icons/fi'; */

import { Container } from './styles';

interface MovieResponseProps {
  Response: string;
  Search: [MovieProps];
  Error?: string;
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

  const dispatch = useDispatch();

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputMovie(e.target.value);
  }, []);

  useEffect(() => {
    if (inputMovie) {
      dispatch(addMoviesSearchedRequest(inputMovie));
      /* api
        .get<MovieResponseProps>(
          `?apikey=${process.env.REACT_APP_API_OMDb_SECRET}&s=${inputMovie}`,
        )
        .then(response => {
          const { Response, Search, Error } = response.data;
          if (Response === 'False') {
            setMoviesSearched([]);
            console.log(Error);
          }
          setMoviesSearched(Search);
        })
        .catch(err => {
          console.log('Do something about this error: ', err);
        }); */
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
