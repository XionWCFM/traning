import { ACTION } from '../../../../@infrastructure/logger/domain/atom/action';
import { FEATURE } from '../../../../@infrastructure/logger/domain/atom/feature';
import { TARGET } from '../../../../@infrastructure/logger/domain/atom/target';

export type UserEventName = `${FEATURE}_${TARGET}_${ACTION}`;
export type EventNameTuple = [FEATURE, TARGET, ACTION];
