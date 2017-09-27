import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import Results from './Results';

import '../styles/css/App.css';
// import * as AnalyzeActions from '../actions/AnalyzeActions';
import * as TwitterActions from '../actions/TwitterHandleActions';

class TwitterSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      validating: false,
      validated: false,
      error: null,
      tweets: null,
      analysis: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
;
  handleChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  handleBlur(event) {
    console.log('blurring');
    this.props.setTwitterHandle(this.state.userName);
    this.props.getTweets(this.state.userName);
  }

  handleClick() {
    this.props.getTweetsAndSentiment(this.state.userName)
    // this.props.clearForm()
  }

  render(){
    return (
      <div>
          <TextField value={this.state.userName} onBlur={this.handleBlur} onChange={this.handleChange} errorText={this.props.error ? this.props.error : null}
            hintText="someTwitterHandle"
          />
          {this.props.validating ? <CircularProgress size={20}/> : null}
          <div>
            <RaisedButton
            label="Analyze"
            onClick={this.handleClick}
            disabled={ this.props.tweets === null }
            primary={true}
          />
          {this.props.analysis ? <Results data={this.props.analysis} userName={this.props.userName} /> : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userName, tweets, validating, validated, error } = state.TwitterHandle;
  const analysis = state.Analyze.analysis;

  return {
    userName,
    validating,
    validated,
    error,
    tweets,
    analysis
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...TwitterActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterSelect);
