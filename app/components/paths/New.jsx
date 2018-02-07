/**
 * .app/components/paths/New.jsx
 */

// React import 
import React from 'react';

// helper components
import NavBar from '../helpers/NavBar.jsx';
import NoteForm from '../helpers/NoteForm.jsx';

export default class NewForm extends React.Component{
    render(){
        return(
            <div>
                <NavBar link='/' text='Cancel'/>
                <NoteForm/>
            </div>
        );
    }
}