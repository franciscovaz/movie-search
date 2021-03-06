export enum ActionTypes {
  addMoviesSearchedRequest = 'ADD_MOVIES_SEARCHED_REQUEST',
  addMoviesSearchedSuccess = 'ADD_MOVIES_SEARCHED_SUCCESS',
  addMoviesSearchedFailure = 'ADD_MOVIES_SEARCHED_FAILURE',
}

export interface IMovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface IMovieProps {
  nameSearched: string;
  Search: IApiResponse;
  favouritedMovies: string[];
}

export interface IApiResponse {
  Response: string;
  Search: IMovieItem[];
  Error?: string;
}
