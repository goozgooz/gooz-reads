import './_searchbar.scss';
import React, {Component} from 'react';

class SearchBar extends Component{
  state = {
    query: '',
  }
  
  handleChange = (e) => {
    this.setState({query: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.query);
    this.setState({query:''});
  }
  
  render(){
    return(
        <form 
          className='search-bar'
          onSubmit={this.handleSubmit}
        >
          <input
            className='search-input'
            type='text'
            value={this.state.query}
            onChange={this.handleChange}
            placeholder='Search books'
          />
        
          <input 
            className='cancel-button'
            onSubmit={this.onSubmit}
            type='submit' 
            value='Cancel' 
          />
        </form>
    )
  }
}

export default SearchBar;
