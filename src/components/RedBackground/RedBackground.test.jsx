import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RedBackground from './RedBackground';

const createTestProps = props => ({
  side: 'left',
  children: <div />,
  top: '10px',
  bottom: '10px',
  right: '50px',
  left: '25px',
  ...props,
});

describe('RedBackground component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<RedBackground {...props} />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<RedBackground {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

});
