import * as actions from '../../actions/TwitterHandleActions';

describe('set Twitter User actions', function() {
  it('creates SET_USERNAME when userName is entered', function() {
    const actionCreator = actions.setTwitterHandle;
    const result = {type: 'SET_USERNAME', userName: 'blurredbits'};

    expect(actionCreator('blurredbits')).toEqual(result)
  })


  it('creates VALIDATE_HANDLE_REQUEST when userName is entered', function() {
    const actionCreator = actions.validateHandle;
    const result = {type: 'VALIDATE_HANDLE_REQUEST'}

    expect(actionCreator('spogburn')).toEqual(result)
  })
})

