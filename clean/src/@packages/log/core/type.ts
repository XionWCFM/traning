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

export type LogEventParam<
  Name extends LogEventName,
  Path extends LogEventPath,
  User extends LogEventUser,
  Property extends LogEventProperty,
  Environment extends LogEventEnvironment,
> = {
  eventUser: User;
  eventName: Name;
  eventPath: Path;

  eventProperty?: Property;
  eventEnvironment?: Environment;
  eventTime?: string;
};

export type LogEvent<
  Name extends LogEventName,
  Path extends LogEventPath,
  User extends LogEventUser,
  Property extends LogEventProperty | undefined,
  Environment extends LogEventEnvironment | undefined,
> = {
  eventUser: User;
  eventProperty: Property;
  eventEnvironment: Environment & DefaultLogEventEnvironment;
  eventName: Name;
  eventPath: Path;
  eventTime: string;
};
