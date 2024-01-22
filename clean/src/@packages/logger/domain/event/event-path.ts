import { AT } from '../atom/at';
import { FEATURE } from '../atom/feature';
import { PAGE } from '../atom/page';
import { TARGET } from '../atom/target';

export type UserEventPath = `${FEATURE}_${PAGE}_${AT}_${TARGET}`;
export type EventPathTuple = [FEATURE, PAGE, AT, TARGET];
