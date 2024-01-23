import {
  LogEventPath,
  LogEventPathTuple,
} from '@/src/@packages/logger/@types/type';
import { AT } from '../atom/at';
import { FEATURE } from '../atom/feature';
import { PAGE } from '../atom/page';
import { TARGET } from '../atom/target';

export type MyEventPath = LogEventPath<FEATURE, PAGE, AT, TARGET>;
export type MyEventPathTuple = LogEventPathTuple<FEATURE, PAGE, AT, TARGET>;
