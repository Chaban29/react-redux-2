import { FC, useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAction } from '../../hooks/useAction';

export const TodoList: FC = () => {
  const { todos, error, loading, page, limit } = useAppSelector(
    (state) => state.todos
  );
  const { fetchTodos, setTodoPage } = useAction();

  const pages: Array<number> = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error Todos...</h1>;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
          </li>
        ))}
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? '4px solid red' : '2px solid gray',
              cursor: 'pointer',
            }}
          >
            {p}
          </button>
        ))}
      </ul>
    </div>
  );
};
