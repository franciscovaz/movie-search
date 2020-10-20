import { ActionTypes, IApiResponse } from './moviesTypes';

export function addMoviesSearchedRequest(movieName: string) {
  return {
    type: ActionTypes.addMoviesSearchedRequest,
    payload: {
      movieName,
    },
  };
}

export function addMoviesSearchedSuccess(movies: IApiResponse) {
  console.log(movies);
  return {
    type: ActionTypes.addMoviesSearchedSuccess,
    payload: {
      movies,
    },
  };
}

export function addMoviesSearchedFailure() {
  return {
    type: ActionTypes.addMoviesSearchedFailure,
    payload: {},
  };
}
