import React, { Component } from 'react';
import Faq from './Faq';
import './Faqs.css';
import '../../App.css';
import { Consumer } from '../../context';

class Faqs extends Component {
    
    render() {

        return (
            <Consumer>
                {value => {
                    const { questions } = value;
                    return (
                        <React.Fragment>
                            <div className='Faq'>
                                <div className='Faq-holder'>
                                    <h1 className='page-heading'>FAQ</h1>
                                    
                                    {questions.map(question => (
                                        <Faq key={question.id}
                                            question = {question}
                                        />
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Faqs;