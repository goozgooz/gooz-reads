import './_mobile.scss';
import React, {Component} from 'react';
import SearchBar from './search/SearchBar';
import NavLinks from './nav-links/NavLinks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class MobileNav extends Component {
  state = {
    showSearch: false,
  }


  render(){
    const showSearch = this.state;
    console.log(showSearch);
    return (
      <div className='mobile-nav'>
      
        <div className='fixed-nav'>
          <FontAwesomeIcon icon={faSearch} />

          <a
            alt='goozreads home link'
            className='goodreads-logo' 
            href='/' title='Goodreads Home'>
          </a>    

          <div className='profile-pic-placeholder'> </div>
        </div>
      
        <div className='lower-nav'>
          { showSearch ? <NavLinks /> : <SearchBar /> }
        </div>

      </div>
    )
  }
}

export default MobileNav;