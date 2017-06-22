import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import '../styles/css/App.css';

class DateSelect extends Component {
  constructor(props) {
    super(props);
    const startDate = new Date(new Date().setDate(new Date().getDate()-7)) // sets the date to 7 days befor current date
    const endDate = new Date();

    this.state = {
      startDate,
      endDate
    }

  }

  changeStartDate = (event, date) => {
    this.setState({
      startDate: date,
    });
  };

  changeEndDate = (event, date) => {
    this.setState({
      endDate: date,
    });
  };

  disabledDates = (date) => {
    return date > new Date();
  };

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.changeStartDate}
          floatingLabelText="Start Date"
          defaultDate={this.state.startDate}
          shouldDisableDate={this.disabledDates}
        />
        <DatePicker
          onChange={this.changeEndDate}
          floatingLabelText="End Date"
          defaultDate={this.state.endDate}
          shouldDisableDate={this.disabledDates}
        />
      </div>

    )
  }
}

export default DateSelect;
