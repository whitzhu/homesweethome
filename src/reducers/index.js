import { combineReducers } from 'redux';
import listingData from './listingData_reducer';
import mobileFilter from './mobileFilter_reducer';

const rootReducer = combineReducers({
  listing: listingData,
  mobileFilterOpen: mobileFilter,
});

export default rootReducer;
