import React from 'react';
import './letter.css';

const Letter = (props) => {
    const { letter, incorrectGuesses, correctGuesses, currentWord, lettersUsed, addLetter, addCorrectGuess, addIncorrectGuess } = props;
    const styles = () => {
        return props.lettersUsed.indexOf(props.letter) >= 0 ? 'letter-chosen letter-body' : 'letter-body';
    };
    const selectLetter = (selected) => {
        let incorrect = incorrectGuesses;
        let correct = correctGuesses;
        // eslint-disable-next-line
        lettersUsed.indexOf(selected) >= 0 ? null : addLetter(selected);
        // eslint-disable-next-line
        currentWord.indexOf(selected) >= 0 ? (correct.push(selected), addCorrectGuess(correct)) : null;
        // eslint-disable-next-line
        (currentWord.indexOf(selected) < 0 && lettersUsed.indexOf(selected) < 0) ? (incorrect++ , addIncorrectGuess(incorrect)) : null;
    };
    return (
        <div className={styles()} onClick={() => selectLetter(letter)}  >{letter}</div>
    )
};

export default Letter