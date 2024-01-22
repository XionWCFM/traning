import { ACTION } from '../atom/action';
import { FEATURE } from '../atom/feature';
import { TARGET } from '../atom/target';

export type UserEventName = `${FEATURE}_${TARGET}_${ACTION}`;
export type EventNameTuple = [FEATURE, TARGET, ACTION];
