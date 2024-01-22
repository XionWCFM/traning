import { LoggerListener } from '@/src/@packages/logger/core/listener';
import { LoggerService } from '@/src/@packages/logger/core/service';
import { ACTION } from '@/src/@infrastructure/logger/domain/atom/action';
import { AT } from '@/src/@infrastructure/logger/domain/atom/at';
import { FEATURE } from '@/src/@infrastructure/logger/domain/atom/feature';
import { PAGE } from '@/src/@infrastructure/logger/domain/atom/page';
import { TARGET } from '@/src/@infrastructure/logger/domain/atom/target';
import { MyLogEvent } from './domain/organism/log-event';
import { LogCreator } from '@/src/@packages/logger/core/creator';

export const loggerService = new LoggerService<
  FEATURE,
  PAGE,
  AT,
  TARGET,
  ACTION
>();

export const loggerListener = new LoggerListener<MyLogEvent>();

export const logCreator = new LogCreator<MyLogEvent>(loggerService);
