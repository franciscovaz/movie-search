import React from 'react';

import Icon from '../../assets/Icons/icon-heart-white.svg';

import { CardContainer } from './styles';

const MovieCard: React.FC = () => {
  return (
    <CardContainer>
      <div className="imgBox">
        <img
          src="https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
          alt="FastAndFurious"
        />

        <div className="content">
          <p>Titulo do filme e cenas do mal a man como novo nos cinemas</p>
          <span>2018</span>
        </div>

        <div className="favouritesIcon">
          <img src={Icon} alt="Add to Favourites" />
        </div>
      </div>
    </CardContainer>
  );
};

export default MovieCard;
