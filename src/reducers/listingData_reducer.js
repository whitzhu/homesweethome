import util from '../util/util';

export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_LISTING_DATA': {
      return action.payload;
    }
    case 'FILTER_LISTING_DATA': {
      let filterState = state.slice();
      util.filterPrice(
        filterState,
        action.category,
        action.sort,
        ((filterPriceListing) => {
          filterState = filterPriceListing;
        }));
      return filterState;
    }
    default:
      return state;
  }
}
