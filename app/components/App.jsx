/**
 * .app/components/App.jsx
 */

/**
 * Importing modules
 */

// React import 
import React from 'react';

// React router 
//import {Router, Route} from 'react-router';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// path components
import Home from './paths/Home.jsx';
import Note from './paths/Note.jsx';
import NewForm from './paths/New.jsx';
import EditForm from './paths/Edit.jsx';

 // style import
import '../css/style.css';

/**
 * Main app component
 */
export default class App extends React.Component{
    render(){
        return(
            <Switch>  
                <Route path='/' exact component={Home}/>
                <Route path='/new' exact  component={NewForm}/>
                <Route path='/note/:id' exact  component={Note}/>
                <Route path='/edit/:id' component={EditForm}/>
            </Switch>
        );
    }
}
