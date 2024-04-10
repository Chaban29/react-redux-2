export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IUsers {
  users: IUser[];
  loading: boolean;
  error: string | null;
}
