import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const OptionLink = styled(props => <Link {...props} />)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  border-bottom: 2px solid #ccc;
  font-size: 1.2rem;
  margin: 0px 20px 0px 20px;

  &:hover {
    background-color:rgba(161, 161, 161, 0.2);
    border-bottom: 2px solid #000;
    
  }
`;
