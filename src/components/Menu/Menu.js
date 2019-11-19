import React from 'react';
import './Menu.css'

const Menu = () => (
  <div className = 'menu'>
    <h1>What's <span id='new-feature-word'>New?</span></h1>
    <button>Local News</button>
    <button>Technology</button>
    <button>Entertainment</button>
    <button>Science</button>
    <button>Health</button>
  </div>
);

export default Menu
