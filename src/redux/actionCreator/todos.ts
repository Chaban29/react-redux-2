import { Dispatch } from 'redux';
import { TodoActionTypes } from '../../types/todos';

export const fetchTodos = (page: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
      );
      const data = await request.json();
      return dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: `Todos error, ${error}`,
      });
    }
  };
};

export const setTodoPage = (page: number) => ({
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: page,
});
