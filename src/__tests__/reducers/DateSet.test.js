import reducer from '../../reducers/DateSet';


describe('Date Set Reducer', function() {
  const initialState = {
    startDate: new Date(new Date().setDate(new Date().getDate()-7)).toDateString(),
    endDate: new Date().toDateString(),
  };

  it('should return the initial state', function() {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_START_DATE', function() {
    const action = {
      type: 'SET_START_DATE',
      startDate: new Date('Tue Jun 20 2017 13:25:04'),
    };

    const startDate = new Date('Fri Jun 20 2017 13:25:04');

    expect(reducer(initialState, action)).toEqual({startDate, endDate: new Date().toDateString()});
  });

  it('should handle SET_END_DATE', function() {
    const action = {
      type: 'SET_END_DATE',
      endDate: new Date('Fri Jun 23 2017 13:25:04'),
    };

    const endDate = new Date('Fri Jun 23 2017 13:25:04');
    const startDate = new Date(new Date().setDate(new Date().getDate()-7)).toDateString();

    expect(reducer(initialState, action)).toEqual({endDate, startDate});
  });
});
