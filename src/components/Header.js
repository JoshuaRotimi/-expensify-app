import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";
import './component-styles/header.css'

const Header = ({startLogout}) => (
    <header className='header'>
        <div className='content-container'>
            <div className='header-content'>
                <Link className='header-title' to='/dashboard' >
                    <h1>Expensify</h1>
                </Link>
                <button className='button button-link' onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>

);

const mapDispatchToProps = (dispatch) => ({
        startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);