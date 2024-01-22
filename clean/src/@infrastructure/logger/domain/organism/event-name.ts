import {
  LogEventName,
  LogEventNameTuple,
} from '@/src/@packages/logger/core/type';
import { ACTION } from '../atom/action';
import { FEATURE } from '../atom/feature';
import { TARGET } from '../atom/target';

export type MyEventName = LogEventName<FEATURE, TARGET, ACTION>;
export type MyEventNameTuple = LogEventNameTuple<FEATURE, TARGET, ACTION>;
