import { LogAtomCreator } from '@/src/@packages/logger/@types/creator/log-atom-creator';
import { ACTION } from './action';
import { AT } from './at';
import { FEATURE } from './feature';
import { PAGE } from './page';
import { TARGET } from './target';

export type MyAtom = LogAtomCreator<FEATURE, PAGE, AT, TARGET, ACTION>;
