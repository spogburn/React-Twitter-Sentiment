import * as actions from '../../actions/DateSetActions';


describe('set start date', function() {
  it('creates SET_START_DATE when start date is selected', function() {
    const actionCreator = actions.setStartDate;
    const startDate = new Date(new Date().setDate(new Date().getDate()-7))
    const result = { type: 'SET_START_DATE', startDate }

    expect(actionCreator(startDate)).toEqual(result)

  })
})
