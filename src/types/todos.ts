export interface ITodo {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export const enum TodoActionTypes {
  FETCH_TODOS = 'todos/fetchTodos',
  FETCH_TODOS_SUCCESS = 'todos/fetchTodosSuccess',
  FETCH_TODOS_ERROR = 'todos/fetchTodosError',
  SET_TODO_PAGE = 'todos/setTodoPage',
}

export type TypeTodosActions =
  | { type: TodoActionTypes.FETCH_TODOS }
  | { type: TodoActionTypes.FETCH_TODOS_SUCCESS; payload: any[] }
  | { type: TodoActionTypes.FETCH_TODOS_ERROR; payload: string }
  | { type: TodoActionTypes.SET_TODO_PAGE; payload: number };
