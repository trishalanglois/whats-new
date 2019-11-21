import React from 'react';
import NewsContainer from './NewsContainer';
import { shallow } from 'enzyme';

describe('NewsContainer', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const articles = [
      {
        img:'b',
        headline:'b',
        description:'b',
        url:'b'
      }, {
        img:'b',
        headline:'b',
        description:'b',
        url:'b'
      }]
    const wrapper = shallow( < NewsContainer
      articles = {articles}
      />);
    expect(wrapper).toMatchSnapshot();
  })
})
