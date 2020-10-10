import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CardContainer, HoverCardContainer } from './styles';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => (
  <>
    <Header />

    <SearchBar />

    <Container>
      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />

          <div className="content">
            <p>Titulo do filme e cenas do mal a man como novo nos cinemas</p>
            <p>2018</p>
          </div>
          {/* <HoverCardContainer>
            <p>Titulo do filme e cenas do mal a man como novo nos cinemas</p>
            <p>2018</p>
          </HoverCardContainer> */}
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>

      <CardContainer>
        <div className="imgBox">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
            alt="FastAndFurious"
          />
        </div>
      </CardContainer>
    </Container>
    <h1>Movies Cenas</h1>
    <Link to="/movie-detail">Detail</Link>
  </>
);

export default Home;
