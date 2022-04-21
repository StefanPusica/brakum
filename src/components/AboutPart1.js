import React, { Component } from 'react';
import './AboutPart1.css';

 class AboutPart1 extends Component {
  render() {
    return (
      <div className='AboutPart1'>
        <div className='about-left-right'>
            <div className='about-left-side'>
                <h1>O NAMA</h1>
                <p className='about-text'>Mi smo mlad tim, izuzetnih profesionalaca u oblasti auto industrije i 
                usluge car fleeta. Pružamo usluge finansiranja novih vozila za pravna lica (operativni lizing), po najnovijim standarima i
                visokokvalitetnom uslugom vođenja flote.</p>
                <p className='about-text'>Visoke standare i kvalitet obezbeđuje saradnja sa eminentnim dobavljačima roba i usluga u oblasti
                 autoindustrije, kao i visokokvalitetni i obučeni tim operativaca koji rešavaju sve zahteve klijenata, na najbrži i najkvalitetniji 
                 način.</p>
                <p className='about-text'>Krasi nas fleksibilnost i pravovremeni odziv na sve složenije zahteve tržišta, kao i inovacije koje su uključene
                 u okviru naše usluge, koje pre svega, vode računa o bezbednosti naših klijenata, kako u zemlji, tako i u inostranstvu.</p>
            </div>
            <div className='about-right-side'>
            
            </div>
        </div>
      </div>
    )
  }
}

export default AboutPart1;