import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense , startRemoveExpense } from '../actions/expenses';
import Modal from "./Modal";
import ExpenseTotal from "./ExpenseTotal";


export class EditExpensePage extends React.Component {

    state = {
        deleting: false
    };

    deleteHandler = () => {
        this.setState({deleting: true})
    };

    removeDelete = () => {
        this.setState({deleting: false})
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <Modal show={this.state.deleting} expenseClosed={this.removeDelete}>
                    <ExpenseTotal
                        cancel={this.removeDelete}
                        continue={this.onRemove}
                        expense={this.props.expense}/>
                </Modal>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-title'>Edit Expense</h1>
                    </div>

                </div>
                <div className='content-container'>
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className='button secondary' onClick={this.deleteHandler}>Remove Expense</button>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
