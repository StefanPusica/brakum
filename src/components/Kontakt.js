import React, { Component } from 'react';
import emailjs from 'emailjs-com';

import './Kontakt.css';

// import { IoMapOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

import ContactAlertSuccess from './ContactAlertSuccess';

import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa';

 class Kontakt extends Component {
     constructor(props){
         super(props);
         
         this.state = {
            formSuccessModal: false
         }

         this.sendEmail = this.sendEmail.bind(this);

     }

     sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mbkuq1b', 'template_jmxmy66', e.target, 'uZbu_lErRf4nDiUmS')
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    console.log(this)
                    this.setState({
                        formSuccessModal: !this.state.formSuccessModal
                    })
                }
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset()
    }
    

  render() {

    return (

        
      <div className='Contact' id='kontakt'>
          {
              this.state.formSuccessModal ?  <ContactAlertSuccess /> : <></> 
          }
          
          <div className='Contact-holder'>
              <div className='Contact-holder-first-line'>
                <div className='contact-left-side'>
                    <h1 className='page-heading-contact'>Kontakt</h1>
                    <form onSubmit={this.sendEmail}>
                        <div className='name-and-surname'>
                            <input type='text' name='name' placeholder='Vaše ime' required />
                            <input type='text' name='surname' placeholder='Vaše prezime' required />
                        </div>
                        <input type='email' name='email' placeholder='Email' required  />
                        <input type='text' name='subject' placeholder='Naslov' required />
                        <textarea type='text' placeholder='Poruke' name='message' required />
                        <button type='submit' className='contact-button'>Pošalji</button>
                    </form> 
                </div>
                <div className='contact-right-side'>
                    <div className='contact-right-holder'>
                        <div className='contact-right-holder-top-line'>
                            <div className='contact-right-holder-top-line-social'>
                                <FaFacebookF />
                            </div>
                            <div className='contact-right-holder-top-line-social'>
                                <IoLogoInstagram />
                            </div>
                            <div className='contact-right-holder-top-line-social'>
                                <FaLinkedinIn />
                            </div>
                        </div>
                        <div className='contact-right-holder-middle-line'>
                            <p className='contact-text'>Pratite nas na društvenim mrežama</p>
                        </div>
                        <div className='contact-right-holder-bottom-line'>
                            <div className='contact-right-holder-card'>
                                <IoMailOutline className='contact-right-side-icons' />
                                <p className='card-surplus'>kontakt@brakum.rs</p>
                            </div>
                            <div className='contact-right-holder-card'>
                                <IoCallOutline className='contact-right-side-icons' />
                                <p>0601333336</p>
                            </div>
                            <div className='contact-right-holder-card'>
                                <IoTimeOutline className='contact-right-side-icons' />
                                <p>08 - 20h</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Kontakt;