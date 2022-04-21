import React, { Component } from 'react';
import './ContactAlertFailure.css';

 class ContactAlertFailure extends Component {
   state = {
     isModalSuccessActive: true
   }

  render() {
    


    return (
      <div>
        {

          this.state.isModalSuccessActive ? 

          <div className='Contact-alert'>
            <p>Došlo je do greške! <br></br> Molimo Vas proverite ispravnost unetih podataka.</p>
            <div className='alert-line'></div>
            <button onClick={() => this.setState({isModalSuccessActive: false})}>U redu</button>
          </div>

          :

          <></>
        }
        
      </div>
    )
  }
}


export default ContactAlertFailure;