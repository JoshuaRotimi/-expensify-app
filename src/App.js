import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";
import { addExpense} from "./actions/expenses";
// import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";


store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const App = () => {
    return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
    )
};


export default App;