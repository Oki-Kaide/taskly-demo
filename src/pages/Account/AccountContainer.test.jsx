import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AccountContainer from './AccountContainer';

const createTestProps = props => ({
  logout: jest.fn(),
  isPageHidden: jest.fn(),
  actor: 'test',
  permission: 'active',
  history: {
    push: jest.fn(),
  },
  ...props,
});

describe('AccountContainer component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<AccountContainer {...props} />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<AccountContainer {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
