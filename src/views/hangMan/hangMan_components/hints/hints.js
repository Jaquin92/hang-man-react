import React from 'react';
import './hints.css';

const Hints = (props) => {
    const hint = () => {
        let letter;
        let { currentWord, correctGuesses, hints } = props;
        if (hints > 0) {
            for (let i = 0; i < currentWord.length; i++) {
                if (correctGuesses.indexOf(currentWord[i]) < 0) {
                    letter = currentWord[i];
                    props.useHint(letter);
                    return
                }
            }
        }
    };
    return (
        <div className={'hints-body'} onClick={() => hint('A')} > Hint <span className={'number-of-hints'} >{`${props.hints}`}</span></div>
    )
}

export default Hints;