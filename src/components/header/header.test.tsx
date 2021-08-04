import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

it('should render Header component', () => {
  const component = shallow(<Header />);  
  expect(component).toMatchSnapshot();
});
