/**
 * .app/js/reducers/index.js
 */

import { ADD_NOTE, EDIT_NOTE } from '../constants/action-types';
import initialState from './init';


const saveStore =  (store) => {
    if(localStorage){
        store = JSON.stringify(store);
        localStorage.setItem('notepad_store', store)
    }

    return true;
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NOTE:
            Object.assign(state, {
                notes: [...state.notes, action.payload] 
            });

            saveStore(state);
            return state;

        case EDIT_NOTE:
            const tmp = state.notes.find( 
                obj => obj.id == action.id
            );
            tmp.title = action.payload.title;
            tmp.entry = action.payload.entry;
            tmp.category = action.payload.category;

            saveStore(state);
            return state;
       default:            
            return state
    }
};
