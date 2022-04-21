import React, { Component } from 'react';
import './Ponuda.css';

 class Ponuda extends Component {
  render() {
    return (
      <div className='Ponuda' id='ponuda'> 
        <div className='ponuda-holder'>
            <h1>Ponuda</h1>
            <p>Molili bi da nam se lično ili putem email-a obratite zahtevom za ponudu, kako bi uzeli u obzir vaše potrebe i
            specifičnosti. Svaka ponuda je prilagođena svakom klijentu ponaosob shodno potrebama i našim sugestijama vezano 
            za što efektivniji izbor usluga a u cilju optimalnog korišćenja voznog parka.</p>
        </div>
        <div className='ponuda-modal'>

        </div>
      </div>
    )
  }
}

export default Ponuda
