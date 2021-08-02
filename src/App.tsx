import React, { useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';


const mockMovies = [
  {
    title: 'Fight Club',
    releaseDate: '1999-10-15',
    overview: 'A wholesome madness experience',
    posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    id: 550
  },
  {
    title: 'The Poseidon Adventure',
    releaseDate: '1972-12-13',
    overview: 'When their ocean liner capsizes, a group of passengers struggle to survive and escape.',
    posterPath: '/6RGiA5BfhelU9zoD0b1GAG4GWWf.jpg',
    id: 551
  },
];



function App() {
  const [movies, setMovies] = useState(mockMovies);
  const [searchText, setSearchText] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  function onSearchChange(event: React.FormEvent<HTMLInputElement>) {
    let searchField = event.target as HTMLInputElement;
    setSearchText(searchField.value);
  };

  return (
    <div className='App'>
        <h1>Movie Database</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <CardList movies={movies} />
      </div>
  );
}

export default App;
