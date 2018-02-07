/**
 * .app/components/paths/New.jsx
 */

// React import 
import React from 'react';

// helper components
import NavBar from '../helpers/NavBar.jsx';
import EditForm from '../helpers/EditForm.jsx';
import Fab from '../helpers/FAB.jsx';

export default class Edit extends React.Component{
    render(){
        const id = this.props.match.params.id;
        return(
            <div>
                <NavBar text='cancel' link={'/note/'+id}/>
                <EditForm noteId={id}/>
            </div>
        );
    }
}