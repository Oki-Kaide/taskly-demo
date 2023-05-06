import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeContainer from './HomeContainer';

describe('HomeContainer component', () => {
  it('renders without crashing', () => {
    shallow(<HomeContainer />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<HomeContainer />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
