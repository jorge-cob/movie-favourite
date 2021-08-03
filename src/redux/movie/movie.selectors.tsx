import { RootState } from "../store";

export const fetchedMovies = (state: RootState) => state.movie

export const getMovieById = (state: any, itemId: string) => {
  const stateMovies = state.movie.movies.filter(({ id }: any) => id === parseInt(itemId))[0]
  const stateFavorites = state.movie.favorites.filter(({ id }: any) => id === parseInt(itemId))[0]
  if(!stateMovies && !stateFavorites) return {} 
  return stateMovies ? stateMovies : stateFavorites
}

export const movieIsFavourite = (state: any, itemId: string) => state.movie.favorites.filter(({ id }: any) => id === parseInt(itemId))[0]

