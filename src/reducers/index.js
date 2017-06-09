import { combineReducers } from 'redux';
import listingData from './listingData_reducer';

const rootReducer = combineReducers({
  listing: listingData,
});

export default rootReducer;
