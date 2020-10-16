export enum ActionTypes {
  addMoviesSearchedRequest = 'ADD_MOVIES_SEARCHED_REQUEST',
  addMoviesSearchedSuccess = 'ADD_MOVIES_SEARCHED_SUCCESS',
  addMoviesSearchedFailure = 'ADD_MOVIES_SEARCHED_FAILURE',
}

export interface MovieProps {
  Search: [
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
  ];
}
