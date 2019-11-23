import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should create a main section with the correct data', () => {
    const wrapper = shallow( <App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when changeNews is called', () => {
    const wrapper = shallow(<App />);
    const mockState = [
      { id: 1,
      headline: 't',
      img: 't',
      description: 't',
      url: 't'},
      { id: 2,
      headline: 's',
      img: 's',
      description: 's',
      url: 's'
    }];
    const newsSource = [
      { id: 3,
      headline: 'd',
      img: 'd',
      description: 'd',
      url: 'd'}
    ]
    wrapper.setState( {news: mockState} );
    expect(wrapper.state('news')).toEqual(mockState);
    wrapper.instance().changeNews(newsSource);
    expect(wrapper.state('news')).toEqual(newsSource)
  })

  it('should update state when filterArticles is called', () => {
    const wrapper = shallow(<App />);
    const mockWord = 'test';
    const mockEvent = { preventDefault: jest.fn() };
    const mockOriginalState = [
      { id: 1,
      headline: 't',
      img: 't',
      description: 't',
      url: 't'},
      { id: 2,
      headline: 'test',
      img: 's',
      description: 's',
      url: 's'
    }];
    const mockFilteredState = [
      { id: 2,
      headline: 'test',
      img: 's',
      description: 's',
      url: 's'
    }]
    wrapper.setState({ news: mockOriginalState });
    expect(wrapper.state('news')).toEqual(mockOriginalState);
    wrapper.instance().filterArticles(mockEvent, mockWord);
    expect(wrapper.state('news')).toEqual(mockFilteredState);
  })
})
