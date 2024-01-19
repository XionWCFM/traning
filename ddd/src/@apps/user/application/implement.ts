import { useAuth } from '../adapter/auth-adapter';
import { useUserStorage } from '../adapter/user-storage-adapter';
import { UserName } from '../domain/user';

export const useAuthenticate = () => {
  const storage = useUserStorage();
  const auth = useAuth();

  const authenticate = async (name: UserName, email: Email) => {
    const user = await auth.auth(name, email);
    storage.updateUser(user);
  };
  return {
    user: storage.user,
    authenticate,
  };
};
