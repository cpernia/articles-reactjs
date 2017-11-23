import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TopBar.css';

import { logout } from "../Auth/AuthActions";

class TopBar extends Component {

    renderTopBarMenu() {
        if (this.props.authenticated){
            return (
                <ul id="user-actions-wrapper">
                    <li>
                        <a onClick={() => this.props.logout(this.props.history)}>
                            Logout<i className="fa fa-sign-in" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul id="user-actions-wrapper">
                    <li><Link to='/signup'>Sign Up<i className="fa fa-user-plus" aria-hidden="true"></i></Link></li>
                    <li><Link to='/signin'>Sign In<i className="fa fa-sign-in" aria-hidden="true"></i></Link></li>
                </ul>
            )
        }
    }

    render() {
        return (
            <div id="top-bar">
                <div>
                    <div id="hamburger-wrapper" onClick={() => this.props.toggleSideBarCover()}>
                        <div className="hamburger-item"></div>
                        <div className="hamburger-item"></div>
                        <div className="hamburger-item"></div>
                    </div>
                </div>
                <div>
                    {this.renderTopBarMenu()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default withRouter(connect(mapStateToProps, { logout })(TopBar));
