import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({image, headline, description, url}) => {
  return (
    <div className = 'news-article'>
      <img src = {image} />
      <h1>{headline}</h1>
      <p>{description}</p>
      <a href={url}>Link to Article</a>
    </div>
  )
}


export default NewsArticle;
