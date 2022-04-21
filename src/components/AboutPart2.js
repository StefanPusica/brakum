import React, { Component } from 'react';
import './AboutPart2.css';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { IoCar } from "react-icons/io5";
import { GiTowTruck } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";

 class AboutPart2 extends Component {
   

  render() {

    

    return (
      <div className='AboutPart2'>
            <div className='AboutPart2-holder'>
              <div className='about-card about-card-1'>
                  <IoCar className='about-icon' />
                  <p className='about-card-text'>Broj vozila</p>
                  <p className='about-card-number' >
                  <CountUp end={25} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                  </CountUp>
                  </p>
              </div>
              <div className='about-card about-card-2'>
                  <GiTowTruck className='about-icon'  />
                  <p className='about-card-text'>Pouzdanost</p>
                  <p className='about-card-number'>
                    <CountUp end={100} suffix='%' redraw={true}>
                      {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                    </CountUp>
                  </p>
              </div>
              <div className='about-card about-card-3'>
                  <IoPersonOutline className='about-icon' />
                  <p className='about-card-text'>Broj zaposlenih</p>
                  <p className='about-card-number'>
                    <CountUp end={7}  redraw={true}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                      </CountUp>
                  </p>
              </div>
            </div>
          {/* </VisibilitySensor> */}
      </div>
    )
  }
}

export default AboutPart2;
