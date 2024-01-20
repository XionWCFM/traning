export type EventUser = {
  type: 'login-user' | 'anonymous';
  userName: string;
  gender: string;
  age: string;
  id: UniqueId;
  device: string;
  isLogin: boolean;
  environment: string;
};
