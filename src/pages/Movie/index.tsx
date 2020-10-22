import React from 'react';
import { Link } from 'react-router-dom';

import goBackArrow from '../../assets/Icons/icon-arrow-grey.svg';

import Header from '../../components/Header';

import {
  Container,
  InformationContainer,
  MovieCover,
  TimerInfo,
  MovieRate,
  MovieDescription,
  MovieTypeAndCast,
  MovieTypeAndCastInformation,
} from './styles';

const Movie: React.FC = () => (
  <>
    <Header />

    <Link to="">
      <img src={goBackArrow} alt="Go home" />
    </Link>

    <Container>
      <InformationContainer>
        <TimerInfo>
          <span> 86 min</span>
          <span> 2014</span>
          <span> R </span>
        </TimerInfo>

        <h1>Fast And Furious</h1>

        <MovieRate>
          <span> 9.5/10</span>
          <span> 99%</span>
          <button type="button">Add to favourites</button>
        </MovieRate>

        <MovieDescription>
          <span>Plot</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium omnis reprehenderit eos maiores soluta ullam dicta
            exercitationem, minus ducimus quasi fugit, sit rem veniam
            dignissimos culpa eligendi necessitatibus? Fuga, dolor?
          </p>
        </MovieDescription>

        <MovieRate>
          <span> 9.5/10</span>
          <span> 99%</span>
          <button type="button">Add to favourites</button>
        </MovieRate>

        <MovieTypeAndCast>
          <MovieTypeAndCastInformation>
            <span>Cast</span>
            <p>Francisco Vaz</p>
            <p>Van Disel</p>
          </MovieTypeAndCastInformation>
          <MovieTypeAndCastInformation>
            <span>Genre</span>
            <p>Action</p>
          </MovieTypeAndCastInformation>
          <MovieTypeAndCastInformation>
            <span>Director</span>
            <p>Francisco Vaz</p>
          </MovieTypeAndCastInformation>
        </MovieTypeAndCast>
      </InformationContainer>

      <MovieCover />
    </Container>
  </>
);
export default Movie;
