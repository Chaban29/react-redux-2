import { TodoActionTypes } from '../../types/todos';

export const fetchTodosAction = (payload: any[]) => ({
  type: TodoActionTypes.FETCH_TODOS,
  payload,
});
export const TodosSuccessAction = (payload: boolean) => ({
  type: TodoActionTypes.FETCH_TODOS_SUCCESS,
  payload,
});
export const TodosErrorAction = (payload: string) => ({
  type: TodoActionTypes.FETCH_TODOS_ERROR,
  payload,
});
