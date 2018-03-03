/**
 * .app/components/Items.jsx
 */

// React import 
import React from 'react';

// React router
import { Link } from 'react-router-dom';

// React redux
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};

class ConnectedNotes extends React.Component{
    render(){
        return(
            <div className="container item-list">
                {
                    this.props.notes.length < 1 ? 
                    <h5 className='center'>No note yet....</h5> :
                    this.props.notes.map(note => (
                        <div key={note.id} >
                            <Link className='black-text'
                              to={'/note/'+note.id}>
                                <div className={"section " + 
                                  note.category + " item"}>
                                    { note.title == ''?
                                    <h5 className="light truncate">
                                        {note.entry}
                                    </h5>
                                    : 
                                    <h5 className="light">
                                        {note.title}
                                    </h5> }
                                    <span>{note.date}</span>
                                </div>
                            </Link>
                            <div className="divider"></div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

const List = connect(mapStateToProps)(ConnectedNotes);

export default List;