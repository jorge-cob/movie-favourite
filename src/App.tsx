import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import WithSpinner from './components/with-spinner/with-spinner';
import { fetchMoviesStart } from './redux/movie/movie.actions';


const mockMovies = [
  {
    title: 'Fight Club',
    releaseDate: '1999-10-15',
    overview: 'A wholesome madness experience',
    posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    id: 550,
    key: 55,
  },
  {
    title: 'The Poseidon Adventure',
    releaseDate: '1972-12-13',
    overview: 'When their ocean liner capsizes, a group of passengers struggle to survive and escape.',
    posterPath: '/6RGiA5BfhelU9zoD0b1GAG4GWWf.jpg',
    id: 551,
    key: 551
  },
];

const MovieListWithSpinner = WithSpinner(CardList);

function App() {
  const [movies, setMovies] = useState(mockMovies);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  function onSearchChange(event: React.FormEvent<HTMLInputElement>) {
    let searchField = event.target as HTMLInputElement;
    setSearchText(searchField.value);
  };
  function onSearchClick() {
    dispatch(fetchMoviesStart(searchText));
    setIsLoading(true);
  };

  return (
    <div className='App'>
      <h1>Movie Database</h1>
      <SearchBox onSearchChange={onSearchChange} onSearchClick={onSearchClick} />
      <MovieListWithSpinner isLoading={isLoading} movies={filteredMovies}/>
    </div>
  );
}

export default App;
