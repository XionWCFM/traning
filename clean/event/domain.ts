export type BaseEvent = {
  type: string;
};

export type UserCreatedEvent = BaseEvent & {
  type: 'USER_CREATED';
  username: string;
};

export type UserDeletedEvent = BaseEvent & {
  type: 'USER_DELETED';
  userId: number;
};

export type Event = UserCreatedEvent | UserDeletedEvent;
export type EventHandler = (event: Event) => void;
export type Handlers = {
  [K in Event['type']]?: Array<(event: Event) => void>;
};
