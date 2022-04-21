import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        questions: [
            {
                id: 1,
                question: 'Šta je operativni lizing?',
                answer: 'Operativni lizing ili dugoročni najam je način finansiranja novih vozila (putničkih i lakih teretnih) za pravna lica, koji ne sprovodi banka, pa samim tim se izbegava komplikovan proces odobrenja i papirologije.'
            },
            {
                id: 2,
                question: 'Koliko dugo firme moraju poslovati da bi ispunile uslov za lizing?',
                answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
            },
            {
                id: 3,
                question: 'Koliko vozila imate u floti?',
                answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
            },
            {
                id: 4,
                question: 'Koje vozilo preporučujete za potrebe komercijale?',
                answer: 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            }
        ]
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer