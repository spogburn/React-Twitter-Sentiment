import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/TwitterHandleActions';
import '../styles/css/App.css';
import TextField from 'material-ui/TextField';

class TwitterSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleBlur = this.handleBlur.bind(this);

  }

  handleChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleBlur(event) {
    console.log('BLURRING', this.props)
    this.props.setTwitterHandle(this.state.userName);
  }

  render(){
    return (
      <div>
        <TextField value={this.state.userName} onBlur={this.handleBlur} onChange={this.handleChange} hintText="Twitter user" />
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     userName: state.userName
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(undefined, mapDispatchToProps)(TwitterSelect);
