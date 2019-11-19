import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ''
    }
  }

  render () {
    return (
      <header>
        <form className = 'search-form'>
          <input type='search' placeholder='Search for a news article here' size='70' aria-label='find article based on keyword' />
        </form>
        <button id='search-button'>Search Now</button>
      </header>
    )
  }
}

export default SearchForm
