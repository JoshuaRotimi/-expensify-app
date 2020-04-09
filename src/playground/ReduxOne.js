import {createStore} from "redux";


const incrementCount = ({incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;

    }

};

const ReduxOne = createStore(countReducer);

ReduxOne.subscribe(() => {
    console.log(ReduxOne.getState());
});



ReduxOne.dispatch(incrementCount({incrementBy: 5}));

ReduxOne.dispatch(incrementCount());

ReduxOne.dispatch(decrementCount({decrementBy: 10}));

ReduxOne.dispatch(decrementCount());

ReduxOne.dispatch(resetCount());

ReduxOne.dispatch(setCount({count: 100}));

export default ReduxOne;
