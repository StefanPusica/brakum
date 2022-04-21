import React, { Component } from 'react'
import './Nav.css'

 class Nav extends Component {
   state = {
    isMenuActive: false
   }


  render() {
    return (
      <nav className='nav'>
          <div className='container-nav'>
            <ul 
              className={this.state.isMenuActive ? 'nav-items active' : 'nav-items'}>
                <li><a href='#home'>Početna</a></li>
                <li><a href='#about'>O nama</a></li>
                <li><a href='#faq'>FAQ</a></li>
                <li><a href='#kontakt'>Kontakt</a></li>
            </ul>
            <ul 
              className={this.state.isMenuActive ? 'nav-items-basterd active' : 'nav-items-basterd'}>
                <li><a href='#ponuda'>Ponuda</a></li>
            </ul>
            <div onClick={() => this.setState({isMenuActive: !this.state.isMenuActive})} className={this.state.isMenuActive ? 'hamburger-menu active' : 'hamburger-menu'}>
                <div className='line line1'></div>
                <div className='line line2'></div>
                <div className='line line3'></div>
            </div>
          </div>
      </nav>
    )
  }
}

export default Nav;
