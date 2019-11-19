import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({image, headline, description, url}) => {
  return (
    <article className = 'news-article'>
      <img src = {image} alt={description}/>
      <h1>{headline}</h1>
      <p>{description}</p>
      <a href={url}>Link to Article</a>
    </article>
  )
}


export default NewsArticle;
