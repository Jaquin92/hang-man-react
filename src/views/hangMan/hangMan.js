import React, { Component } from 'react';
import Keyboard from './hangMan_components/keyboard/keyboard';
import Word from './hangMan_components/word/word_container';
import Bomb from './hangMan_components/bomb/bomb_container';
import Streak from './hangMan_components/streak/streak_container';
import './hangMan.css';
import Hints from './hangMan_components/hints/hints.container';
import PopUp from './hangMan_components/popUp/popUp';


export default class HangMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: false
        };
        this.nextWord = this.nextWord.bind(this);
        this.restart = this.restart.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        // eslint-disable-next-line
        nextProps.currentWord.every(elem => nextProps.correctGuesses.indexOf(elem) > -1) ? this.setState({ popUp: 'you won' }) : null;
        // eslint-disable-next-line
        nextProps.incorrectGuesses === 6 ? this.setState({ popUp: 'you lost' }) : null;
    };
    nextWord() {
        this.props.randomWord(this.props.words, (this.props.currentStreak + 1));
        this.setState({ popUp: false });
    };
    restart() {
        this.props.history.push('/')
    };
    winOrLose() {
        switch (this.state.popUp) {
            default:
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
                <div className={'hint-streak'} > <Hints /> <Streak /> </div>
                <Bomb />
                <Word />
                <Keyboard />
            </div>
        )
    };
};