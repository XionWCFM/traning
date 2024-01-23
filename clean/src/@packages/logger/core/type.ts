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
  EventType extends string,
  EventUser extends Record<string, any>,
  EventProperty extends Record<string, any>,
  EventEnvironment extends Record<string, any>,
> = {
  type: EventType;
  eventUser: EventUser;
  eventProperty: EventProperty;
  eventEnvironment:
    | (EventEnvironment & DefaultLogEventEnvironment)
    | DefaultLogEventEnvironment;
  eventTime: string;
};
