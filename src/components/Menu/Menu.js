import React from 'react';
import './Menu.css';
import youAreHere from '../../images/you-are-here.png';
import entertainmentIcon from '../../images/entertainment.png';
import healthIcon from '../../images/health.png';
import scienceIcon from '../../images/science.png';
import technologyIcon from '../../images/technology.png';


const Menu = (props) => (
  <nav className = 'menu'>
    <h1 id='logo'>News Your Own <span id='new-feature-word'>Adventure</span></h1>
    <button onClick = {() => props.changeNews(props.local)} className='menu-button'><img className='menu-button-icon' src={youAreHere} />  Local News</button>
    <button onClick = {() => props.changeNews(props.technology)}className='menu-button'><img className='menu-button-icon' src={technologyIcon} /> Technology</button>
    <button onClick = {() => props.changeNews(props.entertainment)}className='menu-button'><img className='menu-button-icon' src={entertainmentIcon} /> Entertainment</button>
    <button onClick = {() => props.changeNews(props.science)}className='menu-button'><img className='menu-button-icon' src={scienceIcon} /> Science</button>
    <button onClick = {() => props.changeNews(props.health)}className='menu-button'><img className='menu-button-icon' src={healthIcon} /> Health</button>
  </nav>
);



export default Menu
