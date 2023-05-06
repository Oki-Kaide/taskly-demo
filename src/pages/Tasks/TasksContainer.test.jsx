import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TasksContainer from './TasksContainer';

const createTestProps = props => ({
  accountData: {
    name: 'test',
    avatar: '',
  },
  logout: jest.fn(),
  ...props,
});

describe('TasksContainer component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<TasksContainer {...props} />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<TasksContainer {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
