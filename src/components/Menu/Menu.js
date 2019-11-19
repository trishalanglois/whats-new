import React from 'react';
import './Menu.css'

const Menu = (props) => (
  <nav className = 'menu'>
    <h1>What's <span id='new-feature-word'>New?</span></h1>
    <button onClick = {() => props.changeNews(props.local)} className='menu-button'>Local News</button>
    <button onClick = {() => props.changeNews(props.technology)}className='menu-button'>Technology</button>
    <button onClick = {() => props.changeNews(props.entertainment)}className='menu-button'>Entertainment</button>
    <button onClick = {() => props.changeNews(props.science)}className='menu-button'>Science</button>
    <button onClick = {() => props.changeNews(props.health)}className='menu-button'>Health</button>
  </nav>
);

 

export default Menu
