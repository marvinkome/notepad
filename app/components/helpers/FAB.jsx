/**
 * .app/components/FAB.jsx
 */

// React import 
import React from 'react';

// React router
import { Link } from 'react-router-dom';

// // react materialize
// import {Button} from 'react-materialize';

export default class Fab extends React.Component{
    render(){
        return(
            <div className="fixed-action-btn action-button">
                {this.props.type == 'submit' ?
                <a className='btn-floating btn-large blue-grey'
                  onClick={this.props.onClick}>
                    <i className={this.props.icon}></i>
                </a> :
                <Link className='btn-floating btn-large blue-grey'
                to={this.props.path}>
                   <i className={this.props.icon}></i>
               </Link>}
            </div>
        );
    }
}