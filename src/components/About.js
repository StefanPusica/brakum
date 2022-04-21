import React, { Component } from 'react';
import './About.css';
import AboutPart1 from './AboutPart1';
import AboutPart2 from './AboutPart2';

 class About extends Component {
  render() {
    return (
      <div className='About' id='about'>
        <div className='about-container'>
            <AboutPart1 />
            <AboutPart2 />
        </div>
      </div>
    )
  }
}

export default About;