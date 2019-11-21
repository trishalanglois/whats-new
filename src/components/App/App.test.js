import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should create a main section with the correct data', () => {
    const wrapper = shallow( <App />)
    expect(wrapper).toMatchSnapshot();
  })
})
