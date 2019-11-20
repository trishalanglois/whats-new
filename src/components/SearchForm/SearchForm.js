import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }


  handleChange = event => {
    this.setState({ keyword: event.target.value })
  }

  render () {
    return (
      <header>
        <form className = 'search-form'>
          <input type='search' placeholder='Search for a news article here' size='50' value={this.state.keyword} onChange={event => this.handleChange(event)} aria-label='find article based on keyword' />
        </form>
        <button id='search-button' onClick= {event =>
          this.props.filterArticles(event, this.state.keyword)
        }>Search Now</button>
      </header>
    )
  }
}

export default SearchForm
