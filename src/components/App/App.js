import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';

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

  render () {
    return (
      <div className="app">
        <SearchForm />
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
      </div>
    );
  }
}

export default App;
