import { LoggerService } from './service';

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
  device: 'ios' | 'android' | 'web' | 'unknown';
  environment: 'development' | 'production' | 'test';
};
export type LogEventUser<User extends Record<string, any> = {}> = User;

export type LogEventDetailCreator<
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

export type LogAtomCreator<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
> = {
  feature: Feature;
  page: Page;
  at: At;
  target: Target;
  action: Action;
};

export type LogEventCreator<
  T extends LogEventDetailCreator<string, {}, {}, {}>,
  A extends LogAtomCreator<string, string, string, string, string>,
  Glue extends string = string,
> = T & {
  eventName: LogEventName<A['feature'], A['target'], A['action'], Glue>;
  eventPath: LogEventPath<A['feature'], A['page'], A['at'], A['target'], Glue>;
};

export type LogParamCreator<
  Service extends LoggerService<
    LogEventDetailCreator<string, {}, {}, {}>,
    LogAtomCreator<string, string, string, string, string>
  >,
> = Parameters<Service['createLogEvent']>['0'];
