import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container, NoInfoContainer, CardContainer } from './styles';

import NoInfoImg from '../../assets/Illustrations/illustration-empty-state.png';
import UnfavouriteIcon from '../../assets/Icons/icon-heart-white.svg';
// import FavouriteIcon from '../../assets/Icons/icon-heart-full.svg';
import NoMovieImg from '../../assets/Logos/logo-rotten-tomatoes.png';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
// import MovieCard from '../../components/MovieCard';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IMovieItem } from '../../store/modules/movies/moviesTypes';

const Home: React.FC = () => {
  const moviesSearched = useSelector<IState, IMovieItem[]>(
    state => state.movies.Search.Search,
  );
  // const movies = useSelector<IState, IMovieProps[]>(state => state.movies);

  const handleAddMovieToFavourites = useCallback(movieId => {
    console.log(movieId);
  }, []);

  return (
    <>
      <Header />

      <SearchBar />

      {moviesSearched.length ? (
        <Container>
          {moviesSearched.map(movie => (
            <CardContainer key={movie.imdbID}>
              <div className="imgBox">
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : NoMovieImg}
                  alt={movie.Title}
                />

                <div className="content">
                  <p>{movie.Title}</p>
                  <span>{movie.Year}</span>
                </div>

                <div
                  className="favouritesIcon"
                  onClick={() => handleAddMovieToFavourites(movie.imdbID)}
                >
                  <img src={UnfavouriteIcon} alt="Add to Favourites" />
                </div>
              </div>
            </CardContainer>
          ))}
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
