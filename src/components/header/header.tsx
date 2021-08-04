import React from 'react';

import { HeaderContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = () => {

  return (
    <HeaderContainer>
      <OptionsContainer>
        <>
          <OptionLink to='/'> Movie index </OptionLink>
          <OptionLink to='/favourites'> Favourites </OptionLink>
        </>    
      </OptionsContainer>
    </HeaderContainer>
  );
}

export default Header;
