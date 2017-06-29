import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DateActions from '../actions/DateSetActions';
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
    console.log('this', this);
    this.setState({
      startDate: date,
    });
    this.props.setStartDate(date);
  };

  changeEndDate = (event, date) => {
    this.setState({
      endDate: date,
    });
    this.props.setEndDate(date);
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

function mapStateToProps(state) {
  return {
    startDate: state.startDate,
    endDate: state.endDate
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...DateActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelect);
