import { combineReducers } from 'redux';

import TwitterHandle from './TwitterHandle';
import DateSetter from './DateSet';
import Analyze from './Analyze';

const appReducer = combineReducers({
  TwitterHandle,
  DateSetter,
  Analyze
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
