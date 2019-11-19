import React from 'react';
import './Menu.css'

const Menu = () => (
  <nav className = 'menu'>
    <h1>What's <span id='new-feature-word'>New?</span></h1>
    <button className='menu-button'>Local News</button>
    <button className='menu-button'>Technology</button>
    <button className='menu-button'>Entertainment</button>
    <button className='menu-button'>Science</button>
    <button className='menu-button'>Health</button>
  </nav>
);

export default Menu
