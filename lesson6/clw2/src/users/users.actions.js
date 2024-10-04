import { getUserData } from "./users.gateway";

export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const userDataRecieved = userData => ({type: USER_DATA_RECIEVED, payload: {userData}});
export const showSpinner = isShowSpinner => ({type: SHOW_SPINNER, payload: {isShowSpinner}});
export const fetchUserData = userName => {
  return function(dispatch) {
    dispatch(showSpinner(true));
    getUserData(userName)
      .then(userData => {
        return dispatch(userDataRecieved(userData));
      })
      .catch(err => {
        console.error(err);
        dispatch(showSpinner(false));
      });
  }
};
