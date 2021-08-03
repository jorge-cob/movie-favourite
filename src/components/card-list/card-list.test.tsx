import React from 'react';
import { shallow } from 'enzyme';
import { CardList } from './card-list';

const mockMovies = [
  {
    id: '522',
    title: 'Titanic',
    release_date: '1991-04-1',
    vote_average: '7.8',
    poster_path: 'http://fakeroute.com/titanic.jpg',
    overview: 'Wow, Jack, dont sink!',
  },
  {
    id: '362',
    title: 'Spider Man',
    release_date: '1976-04-12',
    vote_average: '7.8',
    poster_path: 'http://fakeroute.com/spide.jpg',
    overview: 'Wow, Jack, dont sink!',
  },
];

describe('CardList', () => {

  it('should render CardList component', () => {
    const component = shallow(<CardList movies={mockMovies} />)
    expect(component).toMatchSnapshot();
  });
  it('should render CardList component with no movies', () => {
    const component = shallow(<CardList movies={[]} />)
    expect(component).toMatchSnapshot();
  });
});