import { FC, useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IUser } from '../../interfaces/user';
import { useAction } from '../../hooks/useAction';

export const UsersList: FC = () => {
  const { users, loading, error } = useAppSelector((state) => state.users);
  const { fetchUsers } = useAction();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  const usersList: IUser[] = Array.isArray(users) ? users : [];

  return (
    <div>
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
