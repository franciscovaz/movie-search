import { Reducer } from 'redux';

import { ActionTypes, IMovieProps } from './moviesTypes';

const INITIAL_STATE: IMovieProps = {
  nameSearched: '',
  Search: [],
};

const movies: Reducer<IMovieProps> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.addMoviesSearchedRequest: {
      const { movieName } = action.payload;

      return {
        ...state,
        nameSearched: movieName,
      };
    }
    case ActionTypes.addMoviesSearchedSuccess: {
      return {
        ...state,
        Search: action.payload.movies.Search,
      };
    }
    default: {
      return state;
    }
  }
};

export default movies;
