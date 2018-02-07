/**
 * .app/js/reducers/index.js
 */

import { ADD_NOTE, EDIT_NOTE } from '../constants/action-types';

let initialState = {
    notes: [
        { 
            title: 'React Redux Tutorial for Beginners',
            id: 1,
            date: '12-6-09',
            entry: 'React Redux Tutorial for Beginners',
            category: 'personal'
        }
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NOTE:
            return Object.assign(state, {
                notes: [...state.notes, action.payload] 
            });

        case EDIT_NOTE:
            const tmp = state.notes.find( 
                obj => obj.id == action.id
            );
            tmp.title = action.payload.title;
            tmp.entry = action.payload.entry;
            tmp.category = action.payload.category;
            return state;
       default:            
            return state
    }
};
