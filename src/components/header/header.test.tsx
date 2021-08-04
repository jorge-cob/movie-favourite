import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './header';
import { BrowserRouter, Link } from 'react-router-dom';


it('should render Header component', () => {
  const component = shallow(<Header />);  
  expect(component).toMatchSnapshot();
});
it('should have two links with their own routes', () => {
  const wrapper = mount(<BrowserRouter><Header /></BrowserRouter>);
  expect(wrapper.find(Link)).toHaveLength(2);
  expect(wrapper.find(Link).at(0).props().to).toBe('/');
  expect(wrapper.find(Link).at(1).props().to).toBe('/favourites');
});