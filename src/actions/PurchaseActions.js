import firebase from 'firebase';
import {PURCHASES_FETCH_SUCCESS} from './types';

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
