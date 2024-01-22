import { AT } from '../../../../@infrastructure/logger/domain/atom/at';
import { FEATURE } from '../../../../@infrastructure/logger/domain/atom/feature';
import { PAGE } from '../../../../@infrastructure/logger/domain/atom/page';
import { TARGET } from '../../../../@infrastructure/logger/domain/atom/target';

export type UserEventPath = `${FEATURE}_${PAGE}_${AT}_${TARGET}`;
export type EventPathTuple = [FEATURE, PAGE, AT, TARGET];
