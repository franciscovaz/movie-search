import { ActionTypes, MovieProps } from './types';

export function addMoviesSearchedRequest(movieName: string) {
  return {
    type: ActionTypes.addMoviesSearchedRequest,
    payload: {
      movieName,
    },
  };
}

export function addMoviesSearchedSuccess(movies: MovieProps) {
  return {
    type: ActionTypes.addMoviesSearchedSuccess,
    payload: {
      movies,
    },
  };
}
