import { LogEventPath } from '@/src/@packages/log/core/type';
import { AT } from '../atom/at';
import { FEATURE } from '../atom/feature';
import { PAGE } from '../atom/page';
import { TARGET } from '../atom/target';

export type MyEventPath = LogEventPath<FEATURE, PAGE, AT, TARGET>;
