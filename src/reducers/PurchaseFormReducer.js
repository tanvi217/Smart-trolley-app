import {PURCHASE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  // shift: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case PURCHASE_UPDATE:
      // action.payload === {prop: 'name', value: 'tanvi'}
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
};
