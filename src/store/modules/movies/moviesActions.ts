import { ActionTypes, IMovieProps } from './moviesTypes';

export function addMoviesSearchedRequest(movieName: string) {
  return {
    type: ActionTypes.addMoviesSearchedRequest,
    payload: {
      movieName,
    },
  };
}

export function addMoviesSearchedSuccess(movies: IMovieProps) {
  return {
    type: ActionTypes.addMoviesSearchedSuccess,
    payload: {
      movies,
    },
  };
}
