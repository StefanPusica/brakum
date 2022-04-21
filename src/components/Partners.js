import React, { Component } from 'react';

import './Partners.css';
import '../App.css';

import images from '../constants/images';

class Partners extends Component {
    state = {
        images: [
            {
                imgSrc: images.sponsor1
            },
            {
                imgSrc: images.sponsor2
            },
            {
                imgSrc: images.sponsor3
            },
            {
                imgSrc: images.sponsor4
            },
            {
                imgSrc: images.sponsor5
            },
            {
                imgSrc: images.sponsor6
            }
        ]
    }

  render() {
      const images = this.state.images;
    return (
      <div className='Partners'>
          <div className='partner-container'>
            <div className='page-subheading-container'>
                <h1 className='page-subheading'>Naši partneri</h1>
            </div>
            <div className='partners-holder'>
                {images.map((image, index) => (
                    <img src={image.imgSrc} key={index} className={`img-${index}`} alt='img' />
                ))}
            </div>
          </div>
      </div>
    )
  }
}

export default Partners;