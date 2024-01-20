export type User = {
  age: number;
  gender: 'man' | 'woman' | 'unknown' | 'non-binary';
  userName: string;
  userId: UniqueId;
};
