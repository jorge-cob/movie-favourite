import { RootState } from "../store";

export const fetchedMovies = (state: RootState) => state.movie

export const getMovieById = (state: any, itemId: string) => state.movie.movies.filter(({ id }: any) => id === parseInt(itemId))[0]

export const movieIsFavourite = (state: any, itemId: string) => state.movie.favorites.indexOf(parseInt(itemId)) !== -1 