import React, { Component } from 'react';
import HiddenLetter from './word_components/hiddenLetter_container';
import './word.css'

export default class Word extends Component {

    componentWillMount() {
        this.props.words.length > 0 ? this.props.randomWord(this.props.words, 0) : this.props.history.push('/')
    };
    renderWord() {
        return this.props.currentWord.map((letter, i) => {
            return <HiddenLetter key={i} letter={letter} />
        });
    };
    render() {
        return (
            <div className={'word-body'} >{this.renderWord()}</div>
        )
    }
};

