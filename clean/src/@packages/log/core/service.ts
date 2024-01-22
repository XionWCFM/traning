import {
  LogEventName,
  LogEventNameTuple,
  LogEventPath,
  LogEventPathTuple,
} from './type';

export class LoggerService<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
  Glue extends string = '_',
> {
  glue: Glue;
  constructor(config?: {
    defaultOptions?: {
      glue?: Glue;
    };
  }) {
    this.glue = config?.defaultOptions?.glue ?? ('_' as Glue);
  }

  nameTupleToString(
    tuple: [Feature, Target, Action] | readonly [Feature, Target, Action],
  ): LogEventName<Feature, Target, Action> {
    return tuple.join(this.glue) as LogEventName<Feature, Target, Action>;
  }

  pathTupleToString(
    tuple: [Feature, Page, At, Target],
  ): LogEventPath<Feature, Page, At, Target> {
    return tuple.join(this.glue) as LogEventPath<Feature, Page, At, Target>;
  }

  nameStringToTuple(
    eventName: LogEventName<Feature, Target, Action, Glue>,
  ): LogEventNameTuple<Feature, Target, Action> {
    return eventName.split(this.glue) as LogEventNameTuple<
      Feature,
      Target,
      Action
    >;
  }

  pathStringToTuple(
    eventPath: LogEventPath<Feature, Page, At, Target, Glue>,
  ): LogEventPathTuple<Feature, Page, At, Target> {
    return eventPath.split(this.glue) as LogEventPathTuple<
      Feature,
      Page,
      At,
      Target
    >;
  }
}
