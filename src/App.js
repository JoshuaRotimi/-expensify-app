import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";



const App = () => {
    return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
    )
};


export default App;