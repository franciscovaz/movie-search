import React from 'react';
import { Link } from 'react-router-dom';

import goBackArrow from '../../assets/Icons/icon-arrow-grey.svg';

import Header from '../../components/Header';

const Movie: React.FC = () => (
  <>
    <Header />

    <Link to="">
      <img src={goBackArrow} alt="Go home" />
    </Link>
  </>
);
export default Movie;
