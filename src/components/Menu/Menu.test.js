import React from 'react';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow(
      <Menu
        changeNews={jest.fn()}
      />)
      expect(wrapper).toMatchSnapshot();
  })

  it('should call the changeNews prop with the local argument when the Local button is clicked', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Menu
        changeNews={mockClick}
      /> );
    wrapper.find('#local-button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  })

  it('should call the changeNews prop with the technology argument when the Technology button is clicked', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Menu
        changeNews={mockClick}
      /> );
    wrapper.find('#technology-button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  })

  it('should call the changeNews prop with the entertainment argument when the Entertainment button is clicked', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Menu
        changeNews={mockClick}
      /> );
    wrapper.find('#entertainment-button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  })

  it('should call the changeNews prop with the science argument when the Science button is clicked', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Menu
        changeNews={mockClick}
      /> );
    wrapper.find('#science-button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  })

  it('should call the changeNews prop with the health argument when the Health button is clicked', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Menu
        changeNews={mockClick}
      /> );
    wrapper.find('#health-button').simulate('click');
    expect(mockClick).toHaveBeenCalled();
  })
})
