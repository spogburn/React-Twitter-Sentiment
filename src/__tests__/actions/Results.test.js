import * as actions from '../../actions/ResultsActions';

describe('set Sentiment Request actions', function() {
  it('creates SENTIMENT REQUEST when analyze button is clicked', function() {
    const actionCreator = actions.sentimentRequest;
    const result = {type: 'SET_USERNAME', userName: 'blurredbits'};

    expect(actionCreator('blurredbits')).toEqual(result);
  });

});

