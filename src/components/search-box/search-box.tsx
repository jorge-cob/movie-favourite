import React from 'react';

interface SearchProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearchClick(): any;
}

export const SearchBox = ({onSearchChange, onSearchClick}: SearchProps) => (
  <>
    <input
      className='search-box'
      type='search'
      placeholder='search movies'
      onChange={onSearchChange}
    />
    <button className='search-button' onClick={onSearchClick}>
      Search
    </button>
  </>
);
