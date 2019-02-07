import './_mobile.scss';
import React, {Component} from 'react';
import SearchBar from '../search/SearchBar';
import NavLinks from '../nav-links/NavLinks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class MobileNav extends Component {
  state = {
    showSearch: true,
  }

  onSearchClick = () => {
    this.setState({showSearch: !this.state.showSearch});
  }

  render(){
    console.log(this.props.profile);
    return (
      <div className='mobile-nav'>
      
        <div className='fixed-nav'>
          <FontAwesomeIcon 
            icon={faSearch} 
            onClick={this.onSearchClick}  
          />

          <a
            alt='goozreads home link'
            className='goodreads-logo' 
            href='/' title='Goodreads Home'>
          </a>    

          <div className='profile-pic-placeholder'> </div>
        </div>
      
        <div className='lower-nav'>
          { !this.state.showSearch ? <NavLinks /> : <SearchBar /> }
        </div>

      </div>
    )
  }
}

export default MobileNav;