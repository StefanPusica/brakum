import React, { Component } from 'react';
import images from '../../constants/images';

import './TopNav.css';

import { IoTimeSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { IoCall } from 'react-icons/io5';



 class TopNav extends Component {
  render() {
    return (
      <div className='top-nav' id='top'>
          <div className='container-top-nav'>
            <div className='top-nav-logo'>
                <img src={images.logoResize} alt='logo'/>
            </div>
            <div className='top-nav-right-info'>
                <div className='top-nav-right-info-work-time'>
                    <IoTimeSharp className='icons' style={{fontSize: '1.7rem', color: 'var(--color-blue)'}} />
                    <p>08-20h</p>
                </div>
                <div className='top-nav-right-info-email'>
                    <HiMail className='icons' style={{fontSize: '1.7rem', color: 'var(--color-blue)'}} />
                    <p>kontakt@brakum.rs</p>
                </div>
                <div className='top-nav-right-info-phone'>
                    <a href='tel:0601333336'><IoCall className='icons' style={{fontSize: '1.7rem', color: 'var(--color-blue)'}} /></a>
                    <p>0601333336</p>
                </div>
            </div>
          </div>
          
      </div>
    )
  }
}

export default TopNav;
