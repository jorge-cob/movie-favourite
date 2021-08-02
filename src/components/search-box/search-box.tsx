import React from 'react';

interface SearchProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchBox = ({onSearchChange}: SearchProps) => (
  <input
    className='search-box'
    type='search'
    placeholder='search movies'
    onChange={onSearchChange}
  />
);
