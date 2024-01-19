import React from 'react';
import { User } from '../@apps/user/domain/user';

interface StoreValue {
  user: User | undefined;
  updateUser(user: User): void;
}

const StoreContext = React.createContext<null | StoreValue>(null);

export const useStore = () => {
  const value = React.useContext(StoreContext);
  if (value === null) throw new Error('컨텍스트 환경에서 사용해주세요');
  return value;
};

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
  const [user, updateUser] = React.useState<User>();
  const value: StoreValue = {
    user,
    updateUser,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
