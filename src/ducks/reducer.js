import axios from 'axios';

const GET_WORDS = 'GET_WORDS';
const ADD_LETTER = 'ADD_LETTER';
const RANDOM_WORD = 'RANDOM_WORD';
const INCORRECT = 'INCORRECT';
const CORRECT = 'CORRECT';
const USE_HINT = 'USE_HINT';

const initialState = {
    words: [],
    lettersUsed: [],
    incorrectGuesses: 0,
    correctGuesses: [],
    currentWord: [],
    currentStreak: 0,
    hints: 2,
    settings: {
        difficulty: 1
    },
    didErr: false,
    isLoading: false,
};

export function getWords(difficulty) {
    return {
        type: GET_WORDS,
        payload: axios
            .get(`/api/words/${difficulty}`)
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

export function addCorrectGuess(guess) {
    return {
        type: CORRECT,
        payload: guess
    };
};

export function useHint(letter) {
    return {
        type: USE_HINT,
        payload: letter
    };
};




export default function reducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_WORDS}_PENDING`:
            return Object.assign({}, state, { isLoading: true });
        case `${GET_WORDS}_FULFILLED`:
            return Object.assign({}, state, {
                lettersUsed: initialState.lettersUsed,
                incorrectGuesses: initialState.incorrectGuesses,
                correctGuesses: initialState.correctGuesses,
                currentWord: initialState.currentWord,
                currentStreak: initialState.currentStreak,
                hints: initialState.hints,
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
                lettersUsed: initialState.lettersUsed,
                incorrectGuesses: initialState.incorrectGuesses,
                correctGuesses: initialState.correctGuesses,
                hints: initialState.hints,
                currentWord: action.payload.word,
                currentStreak: action.payload.streak
            });
        case INCORRECT:
            return Object.assign({}, state, {
                incorrectGuesses: action.payload
            })
        case CORRECT:
            return Object.assign({}, state, {
                correctGuesses: [...state.correctGuesses, action.payload]
            })
        case USE_HINT:
            return Object.assign({}, state, {
                hints: (state.hints - 1),
                lettersUsed: [...state.lettersUsed, action.payload],
                correctGuesses: [...state.correctGuesses, action.payload]
            })
        default:
            return state;
    }
}