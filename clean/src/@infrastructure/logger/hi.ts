import { LoggerPubSubManager } from '@/src/@packages/logger/core/listener';
import { LoggerService } from '@/src/@packages/logger/core/service';
import { ACTION } from '@/src/@infrastructure/logger/domain/atom/action';
import { AT } from '@/src/@infrastructure/logger/domain/atom/at';
import { FEATURE } from '@/src/@infrastructure/logger/domain/atom/feature';
import { PAGE } from '@/src/@infrastructure/logger/domain/atom/page';
import { TARGET } from '@/src/@infrastructure/logger/domain/atom/target';
import { LogEventDetailCreator } from '@/src/@packages/logger/core/type';

export const loggerService = new LoggerService<
  LogEventDetailCreator<string, {}, {}, {}>,
  FEATURE,
  PAGE,
  AT,
  TARGET,
  ACTION
>();
