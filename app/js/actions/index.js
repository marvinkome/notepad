/**
 * .app/js/actions/index.js
 */

import {ADD_NOTE, EDIT_NOTE } from '../constants/action-types';

export const addNote = note => ({
    type: ADD_NOTE,
    payload: note
});

export const editNote = (note, id) => ({
    type: EDIT_NOTE,
    payload: note,
    id: id
});