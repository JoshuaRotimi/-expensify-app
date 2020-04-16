import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter, {history} from "./routers/AppRouter";
import store from "./store/configureStore";
import {login, logout} from "./actions/auth";
import {firebase } from './firebase/firebase'
import {startSetExpenses} from "./actions/expenses";


const App = () => {
    return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
    )
};

ReactDOM.render(<p>Loading ...</p>, document.getElementById('root'));



export default App;



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses());
        console.log("Log In");
        if (history.location.pathname === '/'){
            history.push('/dashboard');
        }

    } else {
        store.dispatch(logout());
        history.push('/');
        console.log('Log out')
    }
});
