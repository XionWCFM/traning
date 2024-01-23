import { LogAtomDefault, LogEventDetailDefault } from '../default/default-type';
import { LogEventName, LogEventPath } from '../type';

export type LogEventCreator<
  T extends LogEventDetailDefault,
  A extends LogAtomDefault,
  Glue extends string = string,
> = T & {
  eventName: LogEventName<A['feature'], A['target'], A['action'], Glue>;
  eventPath: LogEventPath<A['feature'], A['page'], A['at'], A['target'], Glue>;
};
