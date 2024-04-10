import { IUsers } from '../interfaces/user';

export const enum UsersActions {
  FETCH_USERS = 'users/fetchUsers',
  FETCH_USERS_SUCCESS = 'users/fetchUsersSuccess',
  FETCH_USERS_ERROR = 'users/fetchUsersError',
}

export type TypeUsersActions =
  | { type: UsersActions.FETCH_USERS; payload: IUsers }
  | { type: UsersActions.FETCH_USERS_SUCCESS; payload: IUsers }
  | { type: UsersActions.FETCH_USERS_ERROR; payload: IUsers };
