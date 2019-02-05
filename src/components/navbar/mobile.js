import './_mobile.scss';
import React, {Component} from 'react';

class MobileNav extends Component {
  render(){
    return (
      <div className='mobile-nav'>
      
        <div className='fixed-nav'>
          <a
            alt='goozreads home link'
            className='goodreads-logo' 
            href='/' title='Goodreads Home'>
          </a>    
        </div>
        
        <div className='nav-menu'>
          <h1> my books </h1>
        </div>
      </div>
    )
  }
}

export default MobileNav;