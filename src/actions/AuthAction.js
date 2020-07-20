import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loggedOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      Actions.auth();
    });

  console.log('here');
  // return (dispatch) => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       Actions.auth();
  //       dispatch({type: LOGOUT});
  //     });
  // };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    // dispatch({type: LOGIN_USER});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => {
        loginUserFail(dispatch);
        // firebase
        //   .auth()
        //   .createUserWithEmailAndPassword(email, password)
        //   .then((user) => loginUserSignUpSuccess(dispatch, user))
        //   .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSignUpSuccess = (dispatch, user) => {
  firebase
    .database()
    .ref('users/' + user.uid)
    .set(purchases, function (error) {
      if (error) {
        console.log('error');
      } else {
        console.log(' Data saved successfully!');
      }
    });
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};
