import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";
import '../components/component-styles/login-page.css';

export const LoginPage = ({ startLogin }) => (
    <div className='box-layout'>
        <div className='small-box'>
            <h1 className='box-title'>Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button className='button' onClick={startLogin}>Login with Google</button>
        </div>

    </div>
);

const matchDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, matchDispatchToProps)(LoginPage);
