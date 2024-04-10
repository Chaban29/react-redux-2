import { FC } from 'react';
import { UsersList } from './components/UsersList/UsersList';
import { TodoList } from './components/TodoList/TodoList';

export const App: FC = () => {
  return (
    <div>
      <UsersList />
      <hr />
      <TodoList />
    </div>
  );
};
