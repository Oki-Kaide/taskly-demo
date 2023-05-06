import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CompletedTask from './CompletedTask';
import CheckIcon from './CheckIcon';

const createTestProps = props => ({
  text: 'test',
  ...props,
});

describe('CompletedTask component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<CompletedTask {...props} />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<CompletedTask {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});

describe('CheckIcon component', () => {
  it('renders without crashing', () => {
    shallow(<CheckIcon />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<CheckIcon />);
    expect(toJson(component)).toMatchSnapshot();
  });
});