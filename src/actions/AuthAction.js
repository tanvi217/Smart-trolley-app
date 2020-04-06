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
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        Actions.auth();
        dispatch({type: LOGOUT});
      });
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });

    // dispatch({type: LOGIN_USER});
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  console.log('in success');
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
  Actions.main();
};
