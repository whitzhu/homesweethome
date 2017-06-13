export default function (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_MOBILE_FILTER':
      return action.mobileFilter;
    default:
      return state;
  }
}
