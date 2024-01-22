import { LoggerListener } from '@/src/@packages/log/core/listener';
import { LoggerService } from '@/src/@packages/log/core/service';
import { ACTION } from '@/src/@infrastructure/logger/domain/atom/action';
import { AT } from '@/src/@infrastructure/logger/domain/atom/at';
import { FEATURE } from '@/src/@infrastructure/logger/domain/atom/feature';
import { PAGE } from '@/src/@infrastructure/logger/domain/atom/page';
import { TARGET } from '@/src/@infrastructure/logger/domain/atom/target';
import { MyLogEvent } from './domain/organism/log-event';

export const logger = new LoggerService<FEATURE, PAGE, AT, TARGET, ACTION>();

export const loggerListener = new LoggerListener<
  { type: 'logger_event_publish' } & MyLogEvent
>();
