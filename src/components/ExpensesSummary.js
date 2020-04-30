import React from "react";
import numeral from 'numeral';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import './component-styles/expense-summary.css'

const ExpensesSummary = ({expenseCount,  expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-title'>Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
                <div className='page-header-actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>

        </div>
    )

};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);