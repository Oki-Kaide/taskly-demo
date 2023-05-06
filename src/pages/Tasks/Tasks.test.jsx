import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tasks from './Tasks';
import PlusIcon from './PlusIcon';

const createTestProps = props => ({
  accountData: {
    name: 'test',
    avatar: '',
  },
  logout: jest.fn(),
  ...props,
});

describe('Tasks component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<Tasks {...props} />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<Tasks {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('PlusIcon component', () => {
  it('renders without crashing', () => {
    shallow(<PlusIcon />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<PlusIcon />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
