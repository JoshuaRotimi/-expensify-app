import React , {Component} from "react";
import { connect } from 'react-redux';
import { DateRangePicker} from "react-dates";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import './component-styles/expense-list-filters.css'


class ExpenseListFilters extends Component {
    state = {
         calendarFocused: null
    };
    onDatesChange = ({startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));


    };
    onFocusChange =(calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    };
    render() {
        return (
                <div className='content-container'>
                    <div className='input-group'>
                        <div className='input-group-item'>
                            <input
                                type="text"
                                className='text-input'
                                placeholder='Search Expenses'
                                value={this.props.filters.text}
                                onChange={(e) => {
                                    this.props.dispatch(setTextFilter(e.target.value));
                                }}/>
                        </div>
                        <div className='input-group-item'>
                            <select
                                name="" id=""
                                className='select'
                                value={this.props.filters.sortBy}
                                onChange={(e) => {
                                    if (e.target.value === 'date') {
                                        this.props.dispatch(sortByDate())

                                    } else if (e.target.value === 'amount') {
                                        this.props.dispatch(sortByAmount())

                                    }
                                }}
                            >
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                            </select>
                        </div>
                        <div className='input-group-item'>

                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                startDateId="start_date_id"
                                endDate={this.props.filters.endDate}
                                endDateId="end_date_id"
                                onDatesChange={this.onDatesChange}
                                focusedInput={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                showClearDates={true}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                    </div>


                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);
