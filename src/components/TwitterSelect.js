import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/css/App.css';
import TextField from 'material-ui/TextField';

import * as TwitterActions from '../actions/TwitterHandleActions';

class TwitterSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      validating: false,
      validated: false,
      error: null,
      tweets: null
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleBlur = this.handleBlur.bind(this);

  }

  handleChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  handleBlur(event) {
    this.props.setTwitterHandle(this.state.userName);
    this.props.validateHandle(this.state.userName);
  }

  render(){
    return (
      <div>
          <TextField value={this.state.userName} onBlur={this.handleBlur} onChange={this.handleChange} errorText={this.props.error ? this.props.error : null}
            hintText="someTwitterHandle"
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapping')
  console.log('state', state)
  const { userName, tweets, validating, validated, error } = state.TwitterHandle;
  return {
    userName: userName,
    validating: validating,
    validated: validated,
    error: error,
    tweets: tweets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...TwitterActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterSelect);
