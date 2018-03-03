/**
 * .app/js/redux/reducer/index.js
 */


let initialState = null;

if (localStorage && localStorage.notepad_store){
    initialState = JSON.parse(localStorage.getItem('notepad_store'))
} else {
    initialState = {
        notes: [
            
        ]
    };
}

export default initialState;