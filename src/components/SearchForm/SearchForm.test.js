import React from 'react';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow( < SearchForm
      filterArticles={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  })
})
