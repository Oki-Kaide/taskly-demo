import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RedButton from './RedButton';

const createTestProps = props => ({
  text: 'button text',
  ...props,
});

describe('RedButton component', () => {
  let props;

  beforeEach(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    shallow(<RedButton {...props} />);
  });

  it('renders without crashing while loading', () => {
    shallow(<RedButton {...props} isLoading={true} />);
  });

  it('renders without crashing with a second text', () => {
    shallow(<RedButton {...props} text2='hi' />);
  });

  it('matches the rendered snapshot', () => {
    const component = shallow(<RedButton {...props} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('tests click', () => {
    const component = shallow(<RedButton {...props} />);
    component.find('button').simulate('click');
  });
});
