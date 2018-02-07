/**
 * .app/components/helpers/Note.jsx
 */

// React import 
import React from 'react';

// React redux
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};

class ConnectingNote extends React.Component{   
    render(){
        const id = this.props.noteId;
        const note = this.props.notes.find( obj => obj.id == id); 
        return(
            <div className="section container"> 
                <h5 className="light">{note.title}</h5>
                <div className="divider"></div>
                <p className="flow-text">
                    {note.entry}
                </p>
            </div>
        );
    }
}


const NoteItem = connect(mapStateToProps)(ConnectingNote);

export default NoteItem;