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
        nameSearched: movieName,
        Search: [...state.Search],
      };
    }
    case ActionTypes.addMoviesSearchedSuccess: {
      return {
        ...state,
        Search: action.payload.Search,
      };
    }
    default: {
      return state;
    }
  }
};

export default movies;
