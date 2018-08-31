import React, { Component } from 'react';
import axios from 'axios';
import './popUp.css'

export default class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            translation: '',
            definition: '',
            defResponse: false,
            transResponse: false
        };
    };

    defineWord(word) {
        word = word.toLowerCase()
        axios.get(`/api/define/${word}`).then(response => {

            response.data ? this.setState({ definition: `Definition: ${response.data}`, defResponse: true }) : this.setState({ definition: 'Sorry, our magic dictionary couldn\'t find this word :(', defResponse: true })
        }).catch(() => {
            this.setState({ definition: 'Something is wrong!! Try Refreshing your page!', defResponse: true });
        })
    };
    translateWord(word) {
        word = word.toLowerCase()
        axios.get(`/api/translate/${word}`).then(response => {
            console.log(response.data)

            response.data ? this.setState({ translation: `Spanish: ${response.data}`, transResponse: true }) : this.setState({ definition: 'Sorry, our magic translator couldn\'t translate this word :(', transResponse: true })
        }).catch(() => {
            this.setState({ translation: 'Something is wrong!! Try Refreshing your page!', transResponse: true });
        })
    };
    renderDefinition(word) {
        switch (this.state.defResponse) {
            default:
                return <p className={'button'} onClick={() => this.defineWord(word)} >Define this word</p>;
            case true:
                return <p>{`${this.state.definition}`}</p>
        }
    };

    renderTranslation(word) {
        switch (this.state.transResponse) {
            default:
                return <p className={'button'} onClick={() => this.translateWord(word)} >Learn this word in Spanish</p>;
            case true:
                return <p>{`${this.state.translation}`}</p>
        }
    };

    render() {
        const { message, method, buttonText } = this.props;
        let word = this.props.word.join('');
        return (
            <div className={'popUp-outer'} >
                <div className={'popUp-body'} >
                    <p className={'popUp-message'} >{`${message} "${word}"!`}</p>
                    {this.renderDefinition(word)}
                    {this.renderTranslation(word)}
                    <div className={'popUp-button'} onClick={method} >{buttonText}</div>
                </div >
            </div >
        )
    }
};
