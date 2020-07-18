import firebase from 'firebase';
import {
  PURCHASE_UPDATE,
  PURCHASE_CREATE,
  PURCHASES_FETCH_SUCCESS,
  CONFIRM_ORDER,
} from './types';
import {Actions} from 'react-native-router-flux';

export const purchaseUpdate = ({prop, value}) => {
  return {
    type: PURCHASE_UPDATE,
    payload: {prop, value},
  };
};

export const purchaseCreate = ({name, phone}) => {
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

export const deleteItem = (dateOfPurchase, key, price, weight) => {
  const {currentUser} = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/purchases/${dateOfPurchase}/total`)
    .update({totalprice: price, totalweight: weight})
    .then(function () {
      console.log('Total price updated!');
    })
    .catch(function (error) {
      console.error('Error updating the price: ', error);
    });

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/purchases/${dateOfPurchase}/${key}`)
    .remove()
    .then(function () {
      console.log('Item successfully deleted!');
    })
    .catch(function (error) {
      console.error('Error removing item: ', error);
    });
};

export const confirmOrder = (dateOfPurchase) => {
  const {currentUser} = firebase.auth();

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/purchases/${dateOfPurchase}`)
    .update({isConfirmed: 'True'})
    .then(function () {
      console.log('Order confirmed!');
    })
    .catch(function (error) {
      console.error('Error confirming the order: ', error);
    });
};
