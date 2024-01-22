export type EventUser =
  | ({
      type: 'login-user';
      isLogin: boolean;
    } & Record<string, any>)
  | ({
      type: 'anonymous';
      isLogin: boolean;
    } & Record<string, any>);
