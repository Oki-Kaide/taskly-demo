import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';
import HamburgerIcon from './HamburgerIcon';

const createTestProps = props => ({
  openLoginModal: jest.fn(),
  windowWidth: 800,
  isLoggingIn: false,
  ...props,
});

describe('Home component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<Home {...props} />);
  });

  it('matches the rendered snapshot with default props', () => {
    const component = shallow(<Home {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('matches the rendered snapshot with isLoggingIn true and smaller window width', () => {
    props = createTestProps({
      windowWidth: 500,
      isLoggingIn: true
    });
    const component = shallow(<Home {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('HamburgerIcon component', () => {
  it('renders without crashing', () => {
    shallow(<HamburgerIcon />);
  });

  it('matches the rendered snapshot with default props', () => {
    const component = shallow(<HamburgerIcon />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
