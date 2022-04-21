import React, { Component } from 'react';
import './ContactAlertSuccess.css';

 class ContactAlertSuccess extends Component {
   state = {
     isModalSuccessActive: true
   }

  render() {
    


    return (
      <div>
        {

          this.state.isModalSuccessActive ? 

          <div className='Contact-alert'>
            <p>Hvala Vam što ste nas kontaktirali! <br></br> Vaša poruka je uspešno poslata.</p>
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


export default ContactAlertSuccess;