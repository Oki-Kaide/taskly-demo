import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Account from './Account';

const createTestProps = props => ({
  openConfirmModal: jest.fn(),
  completedTasks: ['task 1', 'task 2'],
  accountData: {name: 'test', avatar:''},
  logout: jest.fn(),
  ...props,
});

describe('Account component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<Account {...props} />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<Account {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
