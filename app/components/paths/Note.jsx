/**
 * .app/components/App.jsx
 */

// React import 
import React from 'react';

// helper components
import NavBar from '../helpers/NavBar.jsx';
import NoteItem from '../helpers/Note.jsx';
import Fab from '../helpers/FAB.jsx';

export default class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note: {}
        }
    }
    render(){
        const id = this.props.match.params.id;
        return(
            <div>
                <NavBar text='Home' link='/'/>
                <NoteItem noteId={id}/>
                <Fab note={this.state.note} icon='fa fa-pencil'
                    path={'/edit/' + id}/>
            </div>
        );
    }
}
