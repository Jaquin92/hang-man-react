import React, { Component } from 'react';
import Keyboard from './components/keyboard/keyboard';
import Word from './components/word/word_container';
import './hangMan.css';
import PopUp from './components/popUp/popUp';


export default class HangMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: false,
            streak: 0
        };
        this.nextWord = this.nextWord.bind(this);
        this.restart = this.restart.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        // eslint-disable-next-line
        nextProps.currentWord.every(elem => nextProps.correctGuesses.indexOf(elem) > -1) ? this.setState({ popUp: 'you won', streak: (this.state.streak + 1) }) : null;
        // eslint-disable-next-line
        nextProps.incorrectGuesses === 6 ? this.setState({ popUp: 'you lost' }) : null;
    };
    nextWord() {
        this.props.randomWord(this.props.words, this.state.streak);
        this.setState({ popUp: false });
    };
    restart() {
        this.props.history.push('/')
    };
    winOrLose() {
        switch (this.state.popUp) {
            default:
                null;
                break;
            case 'you won':
                return <PopUp method={this.nextWord} buttonText={'Next word!'} word={this.props.currentWord} message={'Good job finding'} />
            case 'you lost':
                return <PopUp method={this.restart} buttonText={'Try again!'} word={this.props.currentWord} message={'Nice try, but the word was'} />
        }
    };
    render() {
        return (
            <div className={'game-body'} >
                {this.winOrLose()}
                <Word />
                <Keyboard />
            </div>
        )
    };
};