import { Logger } from '@/src/@packages/log/core/service';
import { ACTION } from '@/src/@packages/logger/domain/atom/action';
import { AT } from '@/src/@packages/logger/domain/atom/at';
import { FEATURE } from '@/src/@packages/logger/domain/atom/feature';
import { PAGE } from '@/src/@packages/logger/domain/atom/page';
import { TARGET } from '@/src/@packages/logger/domain/atom/target';

export const logger = new Logger<FEATURE, PAGE, AT, TARGET, ACTION>();

const a = logger.nameStringToTuple