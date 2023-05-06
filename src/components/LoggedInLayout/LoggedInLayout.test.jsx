import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoggedInLayout from './LoggedInLayout';

const createTestProps = props => ({
  logout: jest.fn(),
  children: <div />,
  mainImageUrl: './images/smiling-girl-bust.png',
  avatar: '',
  ...props,
});

describe('LoggedInLayout component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<LoggedInLayout {...props} />);
  });

  it('renders without crashing with non empty avatar', () => {
    shallow(<LoggedInLayout {...props} avatar='hi' />);
  });

  it('matches the rendered snapshot if windowWidth is less than 700', () => {
    const component = shallow(<LoggedInLayout {...props} />);
    component.setState({ windowWidth: 600 });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('matches the rendered snapshot if windowWidth is greater than 700', () => {
    const component = shallow(<LoggedInLayout {...props} />);
    component.setState({ windowWidth: 800 });
    expect(toJson(component)).toMatchSnapshot();
  });
});
