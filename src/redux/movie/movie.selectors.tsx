import { RootState } from "../store";

export const fetchedMovies = (state: RootState) => state.movie

export const getMovieById = (state: any, itemId: string) => state.movie.movies.filter(({ id }: any) => id === parseInt(itemId))[0]

