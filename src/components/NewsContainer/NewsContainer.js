import React from 'react';
import NewsContainer from './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  return (
    <div className = 'news-container'>
    <NewsArticle
      image = {props.img}
      headline = {props.headline}
      description = {props.description}
      url = {props.url}
    />
    </div>
  )
};

export default NewsContainer;
