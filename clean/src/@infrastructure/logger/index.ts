import { LogEventCreator } from '@/src/@packages/logger/@types/type';
import { Logger } from '@/src/@packages/logger/core/logger';

type Feature = 'hello';
type Page = 'main';
type At = 'popular-content';
type Target = 'button';
type Action = 'click' | 'page' | 'view';
type Glue = '_';
type MyLoggingEvent = {
  type: 'LOGGING_EVENT';
  eventUser: {
    isLogin: boolean;
    age: number;
    userName: string;
  };
  eventProperty?: {
    hello: string;
  };
};

type MyLogEvent = LogEventCreator<
  Feature,
  Page,
  At,
  Target,
  Action,
  MyLoggingEvent,
  Glue
>;

export const logger = new Logger<MyLogEvent>();
