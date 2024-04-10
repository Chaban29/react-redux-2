import { Dispatch } from 'redux';
import { UsersActions } from '../../types/users';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: UsersActions.FETCH_USERS });
      const request = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await request.json();
      return dispatch({
        type: UsersActions.FETCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UsersActions.FETCH_USERS_ERROR,
        payload: 'Users error',
      });
    }
  };
};
