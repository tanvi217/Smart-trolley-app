import {PURCHASES_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
  items: [],
  dateOfPurchase: '',
  totalPrice: 0,
  totalWeight: 0,
  isConfirmed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PURCHASES_FETCH_SUCCESS:
      // state.totalPrice = action.payload.total;
      // state.totalWeight = action.payload.total['totalweight'];
      // console.log(state, action.payload, 'heree');
      return action.payload;

    default:
      return state;
  }
};
