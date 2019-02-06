import './_searchbar.scss';
import React, {Component} from 'react';

class SearchBar extends Component{
  state = {
    query: '',
  }
  render(){
    return(
        <form 
          className='search-bar'
          onSubmit={this.onSubmit}
        >
          <input
            className='search-input'
            type='text'
            value={this.state.query}
            onChange={this.onChange}
            placeholder='Search books'
          />
        
          <input 
            className='cancel-button'
            type='submit' 
            value='Cancel' 
          />
        </form>
    )
  }
}

export default SearchBar;
