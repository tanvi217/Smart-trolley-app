import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PurchaseFormReducer from './PurchaseFormReducer';
import PurchaseReducer from './PurchaseReducer';

export default combineReducers({
  auth: AuthReducer,
  purchaseForm: PurchaseFormReducer,
  purchases: PurchaseReducer,
});
