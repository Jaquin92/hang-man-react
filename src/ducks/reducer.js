import axios from 'axios';

const GET_WORDS = 'GET_WORDS';
const ADD_LETTER = 'ADD_LETTER';
const RANDOM_WORD = 'RANDOM_WORD';
const INCORRECT = 'INCORRECT';
const CORRECT = 'CORRECT';

const initialState = {
    words: [],
    lettersUsed: [],
    incorrectGuesses: 0,
    correctGuesses: [],
    currentWord: ['none'],
    currentStreak: 0,
    hints: 3,
    settings: {
        difficulty: 1
    },
    didErr: false,
    isLoading: false,
};

export function getWords() {
    return {
        type: GET_WORDS,
        payload: axios
            .get(`/api/words/${initialState.settings.difficulty}`)
            .then(response => {
                return response.data.split(/\r?\n/)
            })
            .catch(err => err.message)
    };
};

export function randomWord(words, streak) {
    const randomIndex = Math.floor((Math.random() * words.length));
    const randomWord = words[randomIndex].toUpperCase();
    return {
        type: RANDOM_WORD,
        payload: {
            word: randomWord.split(''),
            streak: streak
        }
    }
};

export function addLetter(letter) {
    return {
        type: ADD_LETTER,
        payload: letter
    };
};

export function addIncorrectGuess(num) {
    return {
        type: INCORRECT,
        payload: num
    };
};

export function addCorrectGuess(guesses) {
    return {
        type: CORRECT,
        payload: guesses
    };
};




export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_WORDS}_PENDING`:
            return Object.assign({}, state, { isLoading: true });
        case `${GET_WORDS}_FULFILLED`:
            return Object.assign({}, state, {
                lettersUsed: [],
                incorrectGuesses: 0,
                correctGuesses: [],
                currentWord: ['none'],
                currentStreak: 0,
                hints: 3,
                settings: initialState.settings,
                isLoading: false,
                words: action.payload
            });
        case `${GET_WORDS}_REJECTED`:
            return Object.assign({}, state, {
                isLoading: false,
                didErr: true
            });

        case ADD_LETTER:
            return Object.assign({}, state, {
                lettersUsed: [...state.lettersUsed, action.payload]
            });
        case RANDOM_WORD:
            return Object.assign({}, state, {
                lettersUsed: [],
                incorrectGuesses: 0,
                correctGuesses: [],
                hints: 3,
                currentWord: action.payload.word,
                currentStreak: action.payload.streak
            });
        case INCORRECT:
            return Object.assign({}, state, {
                incorrectGuesses: action.payload
            })
        case CORRECT:
            return Object.assign({}, state, {
                correctGuesses: action.payload
            })

        default:
            return state;
    }
}