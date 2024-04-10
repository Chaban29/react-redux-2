import { combineReducers } from 'redux';
import { usersReducer } from '../reducers/usersReducer';
import { store } from '../store/store';
import { todoReducer } from '../reducers/todosReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
