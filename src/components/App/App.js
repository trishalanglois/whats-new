import './App.css';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';
import React, { Component } from 'react';
import science from '../../data/science';
import SearchForm from '../SearchForm/SearchForm';
import technology from '../../data/technology';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: local
    }
  }

changeNews = (newsSource) => {
 this.setState({news: newsSource});
}

filterArticles = (event, word) => {
  event.preventDefault();
  const filteredArticles = this.state.news.filter(article => article.description.includes(word) || article.headline.includes(word));
  this.setState({news: filteredArticles})
}

render () {
  return (
    <main className="app">
      <SearchForm
        filterArticles={this.filterArticles}
      />
      <Menu
        changeNews={this.changeNews}
        local={local}
        technology={technology}
        entertainment={entertainment}
        science={science}
        health={health}/>
      <NewsContainer
        articles = {this.state.news}
      />
      <footer>Icons made by Freepik from www.flaticon.com</footer>
    </main>);
  }
}

export default App;
