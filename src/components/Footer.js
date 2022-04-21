import React, { Component } from 'react'
import images from '../constants/images';

import './Footer.css';

import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

 class Footer extends Component {
  render() {
    return (
      <footer>
          <div className='footer-holder'>
            <div className='footer-logo'>
                <img src={images.logo1} alt='footer-logo' />
            </div>
            
            <ul className='footer-pages'>
            <h1 className='footer-heading'>STRANE</h1>
                <li><a href='#home'>Početna</a></li>
                <li><a href='#about'>O nama</a></li>
                <li><a href='#faq'>FAQ</a></li>
                <li><a href='#kontakt'>Kontakt</a></li>
                <li><a href='#ponuda'>Ponuda</a></li>
            </ul>
            <div className='footer-about'>
                <h1 className='footer-heading'>O NAMA</h1>
                <p>Mi smo mlad tim, izuzetnih profesionalaca u oblasti auto industrije i usluge car fleeta. 
                  Pružamo usluge finansiranja novih vozila za pravna lica (operativni lizing), po najnovijim standarima i
                   visokokvalitetnom uslugom vođenja flote. </p>
            </div>
            <div className='footer-info'>
                <h1 className='footer-heading'>INFO</h1>
                <div className='footer-info-phone'>
                    <IoCallOutline />
                    <p>0601333336</p>
                </div>
                <div className='footer-info-mail'>
                    <IoMailOutline />
                    <p>kontakt@brakum.rs</p>
                </div>
                <div className='footer-info-time'>
                    <IoTimeOutline />
                    <p>08 - 20h</p>
                </div>
                <div className='footer-info-soical'>
                    <a href='#'><FaFacebookF /></a>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaLinkedinIn /></a>
                </div>
            </div>
          </div>
          <div className='copyright'>
            <p>© BRAKUM 2022. SVA PRAVA ZADRŽANA</p>
          </div>
      </footer>
    )
  }
}

export default Footer;
