import React from 'react';
import { BoxContainer, SearchButtonItem } from './search-box.styles';

interface SearchProps {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearchClick(): any;
}

export const SearchBox = ({onSearchChange, onSearchClick}: SearchProps) => (
  <BoxContainer>
    <input
      className='search-box'
      type='search'
      placeholder='search movies'
      onChange={onSearchChange}
    />
    <SearchButtonItem className='search-button' onClick={onSearchClick}>
      Search
    </SearchButtonItem>
  </BoxContainer>
);
