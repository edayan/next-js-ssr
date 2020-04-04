import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import data from './data/data.json';

const startState = {
    cards: []
}

export const initialCards = () => {
    return {
        type: 'INITIAL_CARDS',
        cards: data
    }
}

export const addItem = (item) => {
    type: 'ADD',
        item
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_CARDS':
            return action.cards
        case 'ADD':
            return {
                ...state,
                cards: [...state.cards, action.item]
            }
        default:
            return state;
    }
}

export const initStore = (initialState = startState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}