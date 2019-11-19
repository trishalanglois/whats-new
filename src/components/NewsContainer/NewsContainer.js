import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({articles}) => {
  console.log(articles);
  const newsArticles = articles.map((article, i) => {
    return (
      <NewsArticle
        key = {i}
        image = {article.img}
        headline = {article.headline}
        description = {article.description}
        url = {article.url}
      />
    )
  })
  return (
    <div className = 'news-container'>
      {newsArticles}
    </div>
  )
};

export default NewsContainer;
