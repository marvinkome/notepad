/**
 * .app/components/paths/Home.jsx
 */

// React import 
import React from 'react';


// helper components
import NavBar from '../helpers/NavBar.jsx';
import List from '../helpers/Items.jsx';
import Fab from '../helpers/FAB.jsx';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar link='/' text='Notepad'/>
                <List path='/note/1'/>
                <Fab icon='fa fa-sticky-note-o' path='/new'/>
            </div>
        );
    }
}