import { LogEventName } from '@/src/@packages/log/core/type';
import { ACTION } from '../atom/action';
import { FEATURE } from '../atom/feature';
import { TARGET } from '../atom/target';

export type MyEventName = LogEventName<FEATURE, TARGET, ACTION>;
