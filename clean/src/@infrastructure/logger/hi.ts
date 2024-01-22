import { Logger } from '@/src/@packages/log/core/service';
import { ACTION } from '@/src/@packages/logger/domain/atom/action';
import { AT } from '@/src/@packages/logger/domain/atom/at';
import { FEATURE } from '@/src/@packages/logger/domain/atom/feature';
import { PAGE } from '@/src/@packages/logger/domain/atom/page';
import { TARGET } from '@/src/@packages/logger/domain/atom/target';

export const logger = new Logger<FEATURE, PAGE, AT, TARGET, ACTION>();

type MyLogger = typeof logger;

type LoggerInfer<Instance> =
  Instance extends Logger<
    infer Feature,
    infer Page,
    infer At,
    infer Target,
    infer Action,
    infer Glue
  >
    ? {
        feature: Feature;
        page: Page;
        at: At;
        target: Target;
        action: Action;
        glue: Glue;
      }
    : never;

type hi = LoggerInfer<typeof logger>;
