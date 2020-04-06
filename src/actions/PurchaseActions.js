import firebase from 'firebase';
import {
  PURCHASE_UPDATE,
  PURCHASE_CREATE,
  PURCHASES_FETCH_SUCCESS,
} from './types';
import {Actions} from 'react-native-router-flux';

export const purchaseUpdate = ({prop, value}) => {
  console.log(prop, value);
  return {
    type: PURCHASE_UPDATE,
    payload: {prop, value},
  };
};

export const purchaseCreate = ({name, phone}) => {
  // console.log(name, phone);
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/purchases`)
      .push({name, phone})
      .then(() => {
        dispatch({type: PURCHASE_CREATE});
        Actions.purchasesList({type: 'reset'});
      });
  };
};

export const purchasesFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/purchases`)
      .on('value', (snapshot) => {
        dispatch({type: PURCHASES_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
