import { Reducer } from 'redux';

import { ActionTypes, IMovieProps } from './moviesTypes';

const INITIAL_STATE: IMovieProps = {
  nameSearched: '',
  Search: {
    Response: '',
    Search: [],
    Error: '',
  },
  favouritedMovies: [],
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
        Search: {
          Response: 'True',
          Search: action.payload.movies.Search,
          Error: '',
        },
      };
    }
    case ActionTypes.addMoviesSearchedFailure: {
      return {
        Search: {
          Response: '',
          Search: [],
          Error: '',
        },
        nameSearched: '',
        favouritedMovies: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default movies;
