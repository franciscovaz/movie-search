import { ActionTypes, IMoviesState } from './moviesTypes';

export function addMoviesSearchedRequest(movieName: string) {
  return {
    type: ActionTypes.addMoviesSearchedRequest,
    payload: {
      movieName,
    },
  };
}

export function addMoviesSearchedSuccess(movies: IMoviesState) {
  return {
    type: ActionTypes.addMoviesSearchedSuccess,
    payload: {
      movies,
    },
  };
}
