import { combineReducers } from 'redux';

import TwitterHandle from './TwitterHandle';
import DateSetter from './DateSet';

const appReducer = combineReducers({
  TwitterHandle,
  DateSetter,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
