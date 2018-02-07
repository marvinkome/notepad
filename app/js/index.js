/**
 * .app/js/index.js
 */

// React import 
import React from 'react';
import ReactDOM from 'react-dom';

// React router
import {Router} from 'react-router-dom';
import history from './router/history';

// Redux import 
import store from './store/index';
import {addNote} from './actions/index';
import {Provider} from 'react-redux';

// components
import App from '../components/App.jsx';

window.store = store;
window.addNote = addNote;

const element = (
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);