import React from 'react';
import './letter.css';

const Letter = (props) => {
    const { letter, incorrectGuesses, currentWord, lettersUsed, addLetter, addCorrectGuess, addIncorrectGuess } = props;
    const styles = () => {
        return props.lettersUsed.indexOf(props.letter) >= 0 ? 'letter-chosen letter-body' : 'letter-body';
    };
    const selectLetter = (selected) => {
        let incorrect = incorrectGuesses;
        // eslint-disable-next-line
        lettersUsed.indexOf(selected) < 0 ? addLetter(selected) : null;
        // eslint-disable-next-line
        currentWord.indexOf(selected) >= 0 ? addCorrectGuess(selected) : null;
        // eslint-disable-next-line
        (currentWord.indexOf(selected) < 0 && lettersUsed.indexOf(selected) < 0) ? (incorrect++ , addIncorrectGuess(incorrect)) : null;
    };
    return (
        <div className={styles()} onClick={() => selectLetter(letter)}  >{letter}</div>
    )
};

export default Letter