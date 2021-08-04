import React from 'react';
import { shallow } from 'enzyme';

import { SearchBox } from './search-box';

describe('SearchBox component', () => {

  const onSearchChange = jest.fn();
  const onSearchClick = jest.fn();

  const wrapper = shallow(<SearchBox onSearchChange={onSearchChange} onSearchClick={onSearchClick} />);

  it('should render SearchBox component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onSearchChange when text changes', () => {
    wrapper.find('.search-box').simulate('change');
    expect(onSearchChange).toHaveBeenCalled();
  });
  it('should call onSearchClick when button is clicked', () => {
    wrapper.find('.search-button').simulate('click');
    expect(onSearchClick).toHaveBeenCalled();
  });
});