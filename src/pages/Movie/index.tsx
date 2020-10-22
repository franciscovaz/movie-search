import React from 'react';
import { Link } from 'react-router-dom';

import goBackArrow from '../../assets/Icons/icon-arrow-grey.svg';

import Header from '../../components/Header';

import { Container, InformationContainer, MovieCover } from './styles';

const Movie: React.FC = () => (
  <>
    <Header />

    <Link to="">
      <img src={goBackArrow} alt="Go home" />
    </Link>

    <Container>
      <InformationContainer>
        <p>TITULO MAIS CENAS FIXES</p>
      </InformationContainer>

      <MovieCover />
    </Container>
  </>
);
export default Movie;
