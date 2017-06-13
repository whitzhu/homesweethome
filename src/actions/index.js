import dataSuperman from '../../supermanRealty.json';
import dataBatman from '../../batmanRealty.json';
import util from '../util/util';

const FETCH_LISTING_DATA = 'FETCH_LISTING_DATA';
const FILTER_LISTING_DATA = 'FILTER_LISTING_DATA';
const TOGGLE_MOBILE_FILTER = 'TOGGLE_MOBILE_FILTER';

export function fetchListingData() {
  let combinedList = dataSuperman.items;
  util.normalizeListing(dataBatman, (normalizedData) => {
    combinedList = combinedList.concat(normalizedData);
  });
  return {
    type: FETCH_LISTING_DATA,
    payload: combinedList,
  };
}

export function filterListingData(category, sort) {
  return {
    type: FILTER_LISTING_DATA,
    category,
    sort,
  };
}

export function toggleMobileFilter(mobileFilter) {
  console.log('toggleMobileFilter==', mobileFilter)
  return {
    type: TOGGLE_MOBILE_FILTER,
    mobileFilter,
  };
}
