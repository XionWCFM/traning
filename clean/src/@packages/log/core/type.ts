import { EventCreator } from '../../pub-sub/core/type';

export type LogEventName<
  Feature extends string = string,
  Target extends string = string,
  Action extends string = string,
  Glue extends string = string,
> = `${Feature}${Glue}${Target}${Glue}${Action}`;

export type LogEventPath<
  Feature extends string = string,
  Page extends string = string,
  At extends string = string,
  Target extends string = string,
  Glue extends string = string,
> = `${Feature}${Glue}${Page}${Glue}${At}${Glue}${Target}`;

export type LogEventNameTuple<
  Feature extends string = string,
  Target extends string = string,
  Action extends string = string,
> = [Feature, Target, Action];

export type LogEventPathTuple<
  Feature extends string = string,
  Page extends string = string,
  At extends string = string,
  Target extends string = string,
> = [Feature, Page, At, Target];

export type LogEventProperty<EventProp extends Record<string, any> = {}> =
  EventProp;

export type LogEventEnvironment<Environment extends Record<string, any> = {}> =
  Environment;

export type DefaultLogEventEnvironment = {
  device: string;
  environment: string;
};
export type LogEventUser<User extends Record<string, any> = {}> = User;

export type LogEventCreator<
  Type extends string,
  Property extends LogEventProperty | undefined,
  User extends LogEventUser,
  Environment extends LogEventEnvironment | undefined,
> = EventCreator<
  Type,
  {
    eventUser: User;
    eventProperty: Property;
    eventEnvironment: Environment & DefaultLogEventEnvironment;
    eventName: string;
    eventPath: string;
    eventTime: string;
  }
>;

export type LogEventParam<T extends LogEventCreator<string, {}, {}, {}>> = {
  eventUser: T['eventUser'];
  eventName: [string, string, string];
  eventPath: [string, string, string, string];

  eventProperty?: T['eventProperty'];
  eventEnvironment?: Omit<T['eventEnvironment'], 'device' | 'environment'>;
  eventTime?: T['eventTime'];
};
