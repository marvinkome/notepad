/**
 * .app/components/NavBar.jsx
 */

// React import 
import React from 'react';

// React router
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="blue-grey accent-1 nav-extended">
                    <div className="nav-wrapper">
                        <Link to={this.props.link} className="brand-logo left">
                            {this.props.text}
                        </Link>
                        <a href="#!" className="brand-logo right"></a>
                    </div>
                 </nav>
            </div>
        );
    }
}