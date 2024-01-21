type CreateUserEvent = { type: 'CREATE_USER'; userName: string };
type DeleteUserEvent = { type: 'DELETE_USER'; userId: string };

export type MyEvent = CreateUserEvent | DeleteUserEvent;
