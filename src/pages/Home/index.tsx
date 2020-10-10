import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, NoInfoContainer } from './styles';

import NoInfoImg from '../../assets/Illustrations/illustration-empty-state.png';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';

const Home: React.FC = () => {
  const [moviesSearched, setMoviesSearched] = useState(false);
  return (
    <>
      <Header />

      <SearchBar />

      {moviesSearched ? (
        <Container>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Container>
      ) : (
        <NoInfoContainer>
          <Link to="/movie-detail">
            <img src={NoInfoImg} alt="No movies searched" />

            <p>Wanna advice?</p>
          </Link>
        </NoInfoContainer>
      )}
    </>
  );
};

export default Home;
