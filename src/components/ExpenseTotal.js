import React from "react";


const ExpenseTotal = (props) => {
    const summary = Object.keys(props.expense).map((item) => {
        return <li key={item}>{item}: {props.expense[item]}</li>
    });
    return (
        <div>
            <h3>Your Expense Summary:</h3>
            <ul>
                {summary}
            </ul>
            <p>Are you sure you want to delete this expense?</p>
            <button onClick={props.continue}>YES</button>
            <button onClick={props.cancel}>NO</button>


        </div>
    )

};

export default ExpenseTotal;
