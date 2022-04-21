import React, { Component } from 'react';
import './Home.css';

// import images from '../constants/images'
import { BsTools } from 'react-icons/bs';
import { GiSteeringWheel } from 'react-icons/gi';
import { GiReceiveMoney } from 'react-icons/gi';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);


  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('load', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('load', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className='home' id='home'>
          <div className='container-home'>
            <div className='home-left-side'>
                <div className='home-left-side-holder'>
                    <div className='home-left-side-holder-part1'>
                        <h1>Potrebna su vam vozila?</h1>
                        <p>Pružamo usluge finansiranja novih vozila za pravna lica
                            (operativni lizing), po najnovijim standarima i visokokvalitetnom
                            uslugom vođenja flote.</p>

                        <p className='p_hero'>Visoke standare i kvalitet obezbeđuje saradnja sa eminentnim dobavljačima
                        roba i usluga u oblasti autoindustrije, kao i visokokvalitetni i obučeni tim 
                        operativaca koji rešavaju sve zahteve klijenata, na najbrži i najkvalitetniji način.</p>
                        <a href='/' className='btn'>Detaljnije</a>
                    </div>
                    <div className='home-left-side-holder-part2'>
                         <img src={this.state.width < 580 ? require('../assets/bannerArrowPhone.png') : require('../assets/bannerArrow.png')  } alt='arrow' />
                    </div>
                </div>
            </div>
            <div className='home-right-side' >
                <div className='home-card-holder'>
                  <div className='card card1'>
                    <BsTools className='card-icon card-icon1' />
                    <h3>Održavanje</h3>
                  </div>
                  <div className='card card1'>
                    <GiReceiveMoney className='card-icon card-icon2' />
                    <h3>Finansiranje</h3>
                  </div>
                  <div className='card card1'>
                    <GiSteeringWheel className='card-icon card-icon3' />
                    <h3>Razvoj</h3>
                  </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}


export default Home
