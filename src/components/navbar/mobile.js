import './_mobile.scss';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class MobileNav extends Component {
  render(){
    return (
      <div className='mobile-nav'>
      
        <div className='fixed-nav'>
          
          <FontAwesomeIcon icon={faSearch} />
          <a
            alt='goozreads home link'
            className='goodreads-logo' 
            href='/' title='Goodreads Home'>
          </a>    

          <div className='profile-pic-placeholder'>
            
          </div>
        </div>
        
        <ul className='nav-menu'>
          <li> My Books </li>
          <li> Browse ▾ </li>
          <li> Community ▾ </li>
        </ul>
      </div>
    )
  }
}

export default MobileNav;