import { IUsers } from '../../interfaces/user';
import { TypeUsersActions, UsersActions } from '../../types/users';

const initialState: IUsers = {
  users: [],
  loading: false,
  error: '',
};

export const usersReducer = (
  state = initialState,
  { type, payload }: TypeUsersActions
) => {
  switch (type) {
    case UsersActions.FETCH_USERS:
      return { ...state, users: [], error: '', loading: true };
    case UsersActions.FETCH_USERS_SUCCESS:
      return { ...state, users: payload, error: '', loading: false };
    case UsersActions.FETCH_USERS_ERROR:
      return { ...state, users: [], error: payload, loading: false };
    default:
      return state;
  }
};
