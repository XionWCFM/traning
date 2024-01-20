import { AuthSlice } from '../client-store';

export interface AuthSliceState {
  auth: {
    isLogin: boolean;
    accessToken: string;
  };
  login: (token: string) => void;
  logout: () => void;
}

export const createAuthSlice: AuthSlice = (set) => ({
  auth: {
    isLogin: false,
    accessToken: '',
  },
  login: (token) => {
    set((prevState) => ({
      auth: {
        ...prevState.auth,
        isLogin: true,
        accessToken: token,
      },
    }));
  },
  logout: () => {
    set((prev) => ({
      auth: {
        ...prev.auth,
        isLogin: false,
        accessToken: '',
      },
    }));
  },
});
