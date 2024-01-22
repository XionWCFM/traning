import { LoggerListener } from '@/src/@packages/log/core/listener';
import { LoggerService } from '@/src/@packages/log/core/service';
import {
  LogEvent,
  LogEventEnvironment,
  LogEventName,
  LogEventPath,
  LogEventProperty,
} from '@/src/@packages/log/core/type';
import { ACTION } from '@/src/@infrastructure/logger/domain/atom/action';
import { AT } from '@/src/@infrastructure/logger/domain/atom/at';
import { FEATURE } from '@/src/@infrastructure/logger/domain/atom/feature';
import { PAGE } from '@/src/@infrastructure/logger/domain/atom/page';
import { TARGET } from '@/src/@infrastructure/logger/domain/atom/target';

export const logger = new LoggerService<FEATURE, PAGE, AT, TARGET, ACTION>();

type User = {
  age: number;
  isLogin: boolean;
};

type Environment = LogEventEnvironment;

type Property = LogEventProperty;

type Name = LogEventName<FEATURE, TARGET, ACTION>;

type Path = LogEventPath<FEATURE, PAGE, AT, TARGET>;

type MyLogEvent = LogEvent<Name, Path, User, Property, Environment>;

const loggerListener = new LoggerListener<
  typeof logger,
  { type: 'logger_event_publish' } & MyLogEvent
>();
