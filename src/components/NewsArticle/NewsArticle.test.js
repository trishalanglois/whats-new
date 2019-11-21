import React from 'react';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArtcile', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow( <NewsArticle
      articles={[{
        image:'image path',
        headline: 'b',
        description:'b',
        url:'url'
      }, {
        image:'image path',
        headline: 'b',
        description:'b',
        url:'url'
      }]}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})
