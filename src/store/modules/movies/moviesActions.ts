import { ActionTypes, IMovieResponseProps } from './moviesTypes';

export function addMoviesSearchedRequest(movieName: string) {
  return {
    type: ActionTypes.addMoviesSearchedRequest,
    payload: {
      movieName,
    },
  };
}

export function addMoviesSearchedSuccess(movies: IMovieResponseProps) {
  return {
    type: ActionTypes.addMoviesSearchedSuccess,
    payload: {
      movies,
    },
  };
}
