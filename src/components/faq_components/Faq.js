import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Faq.css';

import { IoChevronDownSharp } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';

class Faq extends Component {
    state = {
        showQuestion: false
    }

    render() {
        const { question, answer} = this.props.question;

        return(
                <div className={this.state.showQuestion ? 'faq active' : 'faq'} id='faq'>
                    <div className='faq-first-line'>
                        <h3 className='faq-question'>{question}</h3>
                        <div className='faq-icon-holder'>
                            {this.state.showQuestion ? <IoCloseOutline className='faq-icon' onClick={() => this.setState({showQuestion: !this.state.showQuestion})}  />
                            : <IoChevronDownSharp className='faq-icon' onClick={() => this.setState({showQuestion: !this.state.showQuestion})} />}
                        </div>
                    </div>
                    {this.state.showQuestion ?  <p className='faq-answer'>{answer}</p>
                    : null}
                   
                </div>       
        )
    }
}

Faq.propTypes = {
    question: PropTypes.object.isRequired
}

export default Faq;