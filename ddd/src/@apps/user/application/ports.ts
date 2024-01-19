import { User, UserName } from '../domain/user';

export interface UserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface AuthenticationService {
  auth(name: UserName, email: string): Promise<User>;
}
