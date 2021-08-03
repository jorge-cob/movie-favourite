import React from 'react';
import { shallow } from 'enzyme';
import DetailView from './detail-view';

const mockMovie = {
  id: '522',
  title: 'Titanic',
  release_date: '1991-04-1',
  vote_average: '7.8',
  poster_path: 'http://fakeroute.com',
  overview: 'Wow, Jack, dont sink!',
};

it('should render DetailView component', () => {
  expect.assertions(1);
  const component = shallow(<DetailView movie={mockMovie} />);  
  expect(component).toMatchSnapshot();
});
