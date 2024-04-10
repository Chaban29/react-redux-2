import * as UsersActionCreators from './user';
import * as TodosActionCreators from './todos';

export const globalActions = {
  ...UsersActionCreators,
  ...TodosActionCreators,
};
