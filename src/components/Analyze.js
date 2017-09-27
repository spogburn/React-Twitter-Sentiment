import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as AnalyzeActions from '../actions/AnalyzeActions';
import '../styles/css/App.css';
import Results from './Results';

class Analyze extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getSentiment(this.props.tweets);
  }

  render() {
    console.log("TWEETS", this.props.tweets);
    return (
      <div>
        <RaisedButton
          label="Analyze"
          onClick={this.handleClick}
          disabled={this.props.tweets === null}
          primary={true}
        />
        {this.props.analysis ? <Results data={this.props.analysis} userName={this.props.userName} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const tweets = state.TwitterHandle.tweets;
  const analysis = state.Analyze.analysis;
  const userName = state.TwitterHandle.userName;
  return {
    tweets,
    analysis,
    userName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...AnalyzeActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Analyze);


