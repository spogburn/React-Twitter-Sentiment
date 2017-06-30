import reducer from '../../reducers/TwitterHandle';


describe('Twitter Reducer', function() {
  const initialState = {
    userName: null,
    validating: false,
    validated: false,
    error: null,
  };

  it('should return the initial state', function() {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_USERNAME', function() {
    const action = {
      type: 'SET_USERNAME',
      userName: 'spogburn',
    };
    const expectedState = {
      userName: 'spogburn',
      validating: false,
      validated: false,
      error: null,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
