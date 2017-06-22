import { combineReducers } from 'redux';
import TwitterHandle from './TwitterHandle';

const appReducer = combineReducers({
  TwitterHandle
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
